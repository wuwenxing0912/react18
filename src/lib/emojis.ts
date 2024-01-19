import { emojiList } from './emojiList'

export const emojis: { name: string; chars: string[] }[] = [
  {
    name: '表情',
    chars: []
  },
  {
    name: '手势',
    chars: []
  }
]
emojiList.forEach(([name, list]) => {
  if (name.startsWith('face')) {
    emojis.find(item => item.name === '表情')?.chars.push(...list)
  }
  if (name.startsWith('hand')) {
    emojis.find(item => item.name === '手势')?.chars.push(...list)
  }
})
