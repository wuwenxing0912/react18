import { useEffect, useRef, useState } from 'react'

type Props = {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  request?: () => Promise<unknown>
}
const maxCount = 30
export const SmsCodeInput: React.FC<Props> = (props) => {
  const { value, placeholder, onChange, request } = props
  const [started, setStarted] = useState<Date>()
  const [count, setCount] = useState(maxCount)
  const timer = useRef<number>()
  const onClick = async () => {
    if (!request) { return }
    await request()
    setStarted(new Date())
  }
  const clearTimer = () => {
    if (timer.current) {
      window.clearInterval(timer.current)
      timer.current = undefined
    }
  }
  useEffect(() => {
    if (!started) {
      clearTimer()
      return
    }
    timer.current = window.setInterval(() => {
      const t = new Date()
      const seconds = Math.round((t.getTime() - started.getTime()) / 1000)
      if (maxCount - seconds < 0) {
        setStarted(undefined)
      }
      setCount(maxCount - seconds)
    }, 1000)
    return clearTimer
  }, [started])
  return (
    <div flex gap-x-16px>
      <input shrink-1 j-input-text type="text" placeholder={placeholder} max-w="[calc(40%-8px)]"
        value={value} onChange={e => onChange?.(e.target.value)} />
      {started
        ? <button type="button" max-w="[calc(60%-8px)]" shrink-0 j-btn disabled text-gray>
          {count}秒后可重发
        </button>
        : <button max-w="[calc(60%-8px)]" shrink-0 j-btn type='button' onClick={onClick}>发送验证码</button>}
    </div>
  )
}
