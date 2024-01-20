import { useEffect, useState } from 'react'

type Props = {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  request?: () => Promise<unknown>
}
export const SmsCodeInput: React.FC<Props> = (props) => {
  const { value, placeholder, onChange, request } = props
  const [second, setSecond] = useState(6)
  const [started, setStarted] = useState(false)
  const onClick = async () => {
    if (!request) { return }
    await request()
    setStarted(true)
  }
  useEffect(() => {
    if (!started) { return }
    if (second === -1) {
      setStarted(false)
      setSecond(6)
      return
    }
    const timer = setTimeout(() => {
      setSecond(second - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [started, second])
  return (
    <div flex gap-x-16px>
      <input shrink-1 j-input-text type="text" placeholder={placeholder} max-w="[calc(40%-8px)]"
        value={value} onChange={e => onChange?.(e.target.value)} />
      {started
        ? <button max-w="[calc(60%-8px)]" shrink-0 j-btn type='button'>{second}</button>
        : <button max-w="[calc(60%-8px)]" shrink-0 j-btn type='button' onClick={onClick}>发送验证码</button>}
    </div>
  )
}
