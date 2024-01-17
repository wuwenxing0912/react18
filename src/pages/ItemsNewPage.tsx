import type { ReactNode } from 'react'
import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'
import s from './ItemsNewPage.module.scss'
import { Tags } from './ItemsNewPage/Tags'

export const ItemsNewPage: React.FC = () => {
  const tabsItem: { key: Item['kind']; text: string; element?: ReactNode }[] = [
    { key: 'income', text: '收入', element: <Tags kind='income' /> },
    { key: 'expenses', text: '支出', element: <Tags kind='expenses' /> }
  ]
  const [tab, setTab] = useState('income')
  return (
    <div className={s['items-new-page-wrapper']}>
      <Gradient>
        <TopNav title="记一笔" icon={<Icon name="back" />} />
      </Gradient>
      <Tabs tabs={tabsItem} value={tab} onChange={setTab} prefixClass='items-new-page'
        className='children-text-center children-flex-1' />
    </div>
  )
}
