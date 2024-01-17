import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'

export const ItemsNewPage: React.FC = () => {
  const tabsItem = [{ key: 'income', text: '收入' }, { key: 'expenses', text: '支出' }]
  const [tab, setTab] = useState('income')
  return (
    <div>
      <Gradient>
        <TopNav title="记一笔" icon={<Icon name="back" />} />
        <Tabs tabs={tabsItem} value={tab} onChange={setTab} className='children-text-center children-flex-1' />
      </Gradient>
    </div>
  )
}
