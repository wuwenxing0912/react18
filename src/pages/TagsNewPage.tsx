import { useState } from 'react'
import { emojis } from '../lib/emojis'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { TopNav } from '../components/TopNav'
import s from './TagsNewpage.module.scss'

export const TagsNewpage: React.FC = () => {
  const [emojiKind, setEmojiKind] = useState('表情')
  const onSubmit = () => { }
  return (
    <div>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="新建标签" icon={<Icon name="back" />} />
      </Gradient>
      <form onSubmit={onSubmit}>
        <div flex flex-col gap-y-16px>
          <span>标签名</span>
          <input j-input-text />
          <span text-red>标签名太长</span>
        </div>
        <div flex flex-col gap-y-8px>
          <div>
            <span text-18px>符号</span>
            <span text-24px>😶</span></div>
          <div b-1 b="#5C33BE" rounded-8px h-400px overflow-auto pt-8px pb-16px>
            <div flex p-8px gap-x-16px overflow-auto text="#999">
              {emojis.map(item => <span key={item.name} whitespace-nowrap
                className={item.name === emojiKind ? s['selected-tags'] : ''}
                onClick={() => setEmojiKind(item.name)}>{item.name}</span>)}
            </div>
            <div text-24px p-t-8px p-b-16px h-400px overflow-auto text-center>
              {emojis.map(item => <div key={item.name} grid grid-cols="[repeat(auto-fit,34px)]" grid-rows="[repeat(auto-fit,34px)]"
                justify-center
                style={item.name !== emojiKind ? { display: 'none' } : {}}>
                {item.chars.map(char => <span key={char} text-34px>{char}</span>)}</div>)}
            </div>
          </div>
        </div>
        <p text-center py-24px>记账时长按标签，即可进行编辑</p>
        <div>
          <button j-btn>确定</button>
        </div>
      </form>
    </div>
  )
}
