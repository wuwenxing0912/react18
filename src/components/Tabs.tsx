import s from './Tabs.module.scss'

interface Props<T> {
  tabs: { key: T; text: string }[]
  value: string
  onChange: (key: T) => void
}

export const Tabs = <T extends string>(props: Props<T>) => {
  const { tabs, value, onChange } = props
  return (
    <ol flex text-white children-px-24px children-py-12px cursor-pointer>
      {tabs.map(tab => <li key={tab.key} className={tab.key === value ? s.selected : ''}
        onClick={() => onChange(tab.key)}>
        {tab.text}
      </li>)}
    </ol>
  )
}
