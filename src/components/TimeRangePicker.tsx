import { Tabs } from './Tabs'
export type TimeRange = 'thisMonth' | 'lastMonth' | 'thisYear' | 'custom'
type Props = {
  selected: TimeRange
  onSelect: (selected: TimeRange) => void
  timeRanges?: { key: TimeRange; text: string }[]
}
const defaultRanges: { key: TimeRange; text: string }[] = [
  { key: 'thisMonth', text: '本月' },
  { key: 'lastMonth', text: '上月' },
  { key: 'thisYear', text: '今年' },
  { key: 'custom', text: '自定义时间' },
]
export const TimeRangePicker: React.FC<Props> = (props) => {
  const { selected, onSelect, timeRanges = defaultRanges } = props
  return (
    <Tabs tabItems={timeRanges} value={selected} onChange={onSelect} />
  )
}
