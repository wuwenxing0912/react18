import { useState } from 'react'
import useSWR from 'swr'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import type { TimeRange } from '../components/TimeRangePicker'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { LineChart } from '../components/LineChart'
import { PieChart } from '../components/PieChart'
import { RankChart } from '../components/RankChart'
import { Input } from '../components/Input'
import { useAjax } from '../lib/ajax'
import type { Time } from '../lib/time'
import { time } from '../lib/time'

export const StatisticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  // const pieItems = [
  //   { tag: { name: '吃饭', sign: '😨' }, amount: 10000 },
  //   { tag: { name: '打车', sign: '🥱' }, amount: 20000 },
  //   { tag: { name: '买皮肤', sign: '💖' }, amount: 68800 },
  // ].map(item => ({ x: item.tag.name, y: item.amount / 100 }))
  const items3 = [
    { tag: { name: '吃饭', sign: '😨' }, amount: 10000 },
    { tag: { name: '打车', sign: '🥱' }, amount: 20000 },
    { tag: { name: '买皮肤', sign: '💖' }, amount: 68800 },
  ].map(item => ({ name: item.tag.name, value: item.amount, sign: item.tag.sign }))
  const [kind, setKind] = useState('expenses')
  const timeRanges: { key: TimeRange; text: string }[] = [
    { key: 'thisMonth', text: '本月' },
    { key: 'lastMonth', text: '上月' },
  ]
  const format = 'yyyy-MM-dd'
  const generateStartEnd = () => {
    if (timeRange === 'thisMonth') {
      const start = time().firstDayOfMonth
      const end = time().lastDayOfMonth.add(1, 'day')
      return { start, end }
    } else {
      return { start: time(), end: time() }
    }
  }
  const generateDefaultItems = (time: Time) => {
    return Array.from({ length: start.dayCountOfMonth }).map((_, i) => {
      const x = start.clone.add(i, 'day').format(format)
      return { x, y: 0 }
    })
  }
  const { start, end } = generateStartEnd()
  const defaultItems = generateDefaultItems(start)
  const { get } = useAjax({ showLoading: false, handleError: true })
  const { data: items } = useSWR(`/api/v1/items/summary?happened_after=${start}&happened_before=${end}&kind=${kind}&group_by=happen_at`,
    async (path) => {
      const res = await get<{ groups: { happen_at: string; amount: number }[]; total: number }>(path)
      return res.data.groups.map(({ happen_at, amount }) => ({ x: happen_at, y: amount / 100 }))
    })
  const normalizedItems = defaultItems?.map((defaultItem, index) =>
    items?.find((item) => item.x === defaultItem.x) || defaultItem
  )
  const { data: pieItems } = useSWR(`/api/v1/items/summary?happened_after=${start}&happened_before=${end}&kind=${kind}&group_by=tag_id`,
    async (path) => {
      // ].map(item => ({ x: item.tag.name, y: item.amount / 100 }))
      const res = await get<{ groups: { tag_id: number; tag: Tag; amount: number }[]; total: number }>(path)
      return res.data.groups.map(({ tag, amount }) => ({ x: tag.name, y: amount / 100 }))
    })
  console.log(pieItems)
  return (
    <div>
      <Gradient>
        <TopNav title="统计图表" icon={
          <Icon name="back" />
        } />
      </Gradient>
      <TimeRangePicker selected={timeRange} onSelect={setTimeRange} timeRanges={timeRanges} />
      <div>{timeRange}</div>
      <div flex p-16px items-center gap-x-16px>
        <span grow-0 shrink-0>类型</span>
        <div grow-1 shrink-1>
          <Input type="select" options={[
            { text: '支出', value: 'expenses' },
            { text: '收入', value: 'income' },
          ]} value={kind} onChange={value => setKind(value)} disableError />
        </div>
      </div>
      <LineChart className="h-120px" items={normalizedItems} />
      <PieChart className="h-260px m-t-16px" items={pieItems} />
      <RankChart className="m-t-8px" items={items3} />
    </div>
  )
}
