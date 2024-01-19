import { useState } from 'react'
import { emojis } from '../lib/emojis'

export const TagsNewpage: React.FC = () => {
  console.log(emojis)
  const [emojiKind, setEmojiKind] = useState('表情')
  const onSubmit = () => { }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <span>标签名</span>
          <input j-input-text />
          <span>标签名太长</span>
        </div>
        <div>
          <span>符号😶</span>
          <div>
            <div flex>
              {emojis.map(item => <span key={item.name} onClick={() => setEmojiKind(item.name)}>{item.name}</span>)}
            </div>
            <div>
              {emojis.map(item => <div key={item.name}
                style={item.name !== emojiKind ? { display: 'none' } : {}}>{item.chars}</div>)}
            </div>
          </div>
        </div>
        <p>记账时长按标签，即可进行编辑</p>
        <div>
          <button j-btn></button>
        </div>
      </form>
    </div>
  )
}
