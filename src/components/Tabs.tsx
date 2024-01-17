import type { ReactNode } from 'react'
import classnames from 'classnames'
import s from './Tabs.module.scss'

interface Props<T> {
  tabs: { key: T; text: string; element?: ReactNode }[]
  value: string
  onChange: (key: T) => void
  className: string
  prefixClass?: string
}

export const Tabs = <T extends string>(props: Props<T>) => {
  const { tabs, value, onChange, className, prefixClass } = props
  return (
    <div className={className}>
      <ol flex text-white children-px-24px children-py-12px bg="[rgb(143,76,215)]"
        className={prefixClass ? `${prefixClass}-menu` : ''}>
        {tabs.map(tab => <li key={tab.key}
          className={classnames(tab.key === value ? s.selected : '', prefixClass ? `${prefixClass}-menu-item` : '')}
          onClick={() => onChange(tab.key)}>
          {tab.text}
        </li>)}
      </ol>
      <div className={prefixClass ? `${prefixClass}-pane` : ''}>
        {tabs.filter(tab => tab.key === value)[0].element}
      </div>
    </div>
  )
}
