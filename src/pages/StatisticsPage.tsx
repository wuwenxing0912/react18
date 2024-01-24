import { useEffect, useState } from 'react'
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
import { time } from '../lib/time'

export const StatisticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  // const items = [
  //   { date: '2000-01-01', value: 15000 },
  //   { date: '2000-01-02', value: 25000 },
  //   { date: '2000-01-03', value: 25000 },
  //   { date: '2000-01-04', value: 35000 },
  //   { date: '2000-01-05', value: 35000 },
  //   { date: '2000-01-06', value: 45000 },
  //   { date: '2000-01-07', value: 45000 },
  //   { date: '2000-01-08', value: 55000 },
  //   { date: '2000-01-09', value: 55000 },
  //   { date: '2000-01-10', value: 65000 },
  //   { date: '2000-01-11', value: 65000 },
  //   { date: '2000-01-12', value: 75000 },
  //   { date: '2000-01-13', value: 75000 },
  //   { date: '2000-01-14', value: 85000 },
  //   { date: '2000-01-15', value: 85000 },
  //   { date: '2000-01-16', value: 95000 },
  //   { date: '2000-01-17', value: 95000 },
  //   { date: '2000-01-18', value: 105000 },
  //   { date: '2000-01-19', value: 105000 },
  //   { date: '2000-01-20', value: 115000 },
  //   { date: '2000-01-21', value: 115000 },
  //   { date: '2000-01-22', value: 125000 },
  //   { date: '2000-01-23', value: 125000 },
  //   { date: '2000-01-24', value: 135000 },
  //   { date: '2000-01-25', value: 135000 },
  //   { date: '2000-01-26', value: 145000 },
  //   { date: '2000-01-27', value: 145000 },
  //   { date: '2000-01-28', value: 155000 },
  //   { date: '2000-01-29', value: 155000 },
  //   { date: '2000-01-31', value: 10000 },
  // ].map(item => ({ x: item.date, y: item.value / 100 }))
  const items2 = [
    { tag: { name: '吃饭', sign: '😨' }, amount: 10000 },
    { tag: { name: '打车', sign: '🥱' }, amount: 20000 },
    { tag: { name: '买皮肤', sign: '💖' }, amount: 68800 },
  ].map(item => ({ x: item.tag.name, y: item.amount / 100 }))
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
  const generateStartAndEnd = () => {
    if (timeRange === 'thisMonth') {
      const start = time().firstDayOfMonth.format('yyyy-MM-dd')
      const end = time().lastDayOfMonth.add(1, 'day').format('yyyy-MM-dd')
      return { start, end }
    } else {
      return { start: '', end: '' }
    }
  }
  const { start, end } = generateStartAndEnd()
  const { get } = useAjax({ showLoading: false, handleError: true })
  const { data: items } = useSWR(`/api/v1/items/summary?happened_after=${start}&happened_before=${end}&kind=${kind}&group_by=happen_at`,
   async (path) => {
    const res = await get<{ groups: { happen_at: string; amount: number }[]; total: number }>(path)
    return res.data.groups.map(({ happen_at, amount }) => ({ x: happen_at, y: amount / 100 }))
  })
  useEffect(() => {
    console.log(items)
  }, [items])
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
      <LineChart className="h-120px" items={items} />
      <PieChart className="h-260px m-t-16px" items={items2} />
      <RankChart className="m-t-8px" items={items3} />
    </div>
  )
}
