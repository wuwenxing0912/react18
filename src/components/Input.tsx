import type { ReactNode } from 'react'
import { EmojiInput } from './Input/EmojiInput'

type Props = {
  label?: string | ReactNode
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  error?: string
  disabledError?: boolean
} & (
    | { type: 'text' }
    | { type: 'emoji' }
    | { type: 'sms_code' }
    | { type: 'select'; options: { value: string; text: string }[] }
  )
export const Input: React.FC<Props> = (props) => {
  const { label, placeholder, type, value, onChange, error, disabledError = false } = props
  const renderInput = () => {
    switch (props.type) {
      case undefined:
      case 'text':
        return <input j-input-text type={type} placeholder={placeholder}
          value={value} onChange={e => onChange?.(e.target.value)} />
      case 'emoji':
        return <EmojiInput value={value} onChange={value => onChange?.(value)} />
      case 'select':
        return <select className='h-36px' onChange={(e) => onChange?.(e.target.value)}>
          {props.options.map((option) => <option value={option.value} key={option.value}>{option.text}</option>)}
        </select>
      case 'sms_code':
        return (
          <div flex gap-x-16px>
            <input shrink-1 j-input-text type="text" placeholder={placeholder} max-w="[calc(40%-8px)]"
              value={value} onChange={e => onChange?.(e.target.value)} />
            <button max-w="[calc(60%-8px)]" shrink-0 j-btn>发送验证码</button>
          </div>
        )
      default:
        return null
    }
  }
  return (
    <>
      <div flex flex-col gap-y-8px>
        {label ? <span text-18px>{label}</span> : null}
        {renderInput()}
        {disabledError ? null : <span text-red text-12px>{error || '　'}</span>}
      </div>
    </>
  )
}
