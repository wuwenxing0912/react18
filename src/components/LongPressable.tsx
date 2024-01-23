import type { ReactNode, TouchEvent } from 'react'
import { useRef } from 'react'

type Props = {
  children?: ReactNode
  onEnd?: () => void
  className?: string
}

export const LongPressable: React.FC<Props> = (props) => {
  const { children, onEnd } = props
  const timer = useRef<number>()
  const position = useRef<{ x?: number; y?: number }>({ x: undefined, y: undefined })
  const handleTouchStart = (e: TouchEvent) => {
    timer.current = window.setTimeout(() => {
      onEnd?.()
    }, 800)
    const { clientX: x, clientY: y } = e.touches[0]
    position.current = { x, y }
  }
  const handleTouchMove = (e: TouchEvent) => {
    const { clientX: newX, clientY: newY } = e.touches[0]
    if (position.current.x === undefined || position.current.y === undefined) { return }
    const distance = Math.sqrt((newX - position.current.x) ** 2 + (newY - position.current.y) ** 2)
    if (distance > 10) {
      window.clearTimeout(timer.current)
      timer.current = undefined
    }
  }
  const handleTouchEnd = (e: TouchEvent) => {
    if (timer.current) {
      window.clearTimeout(timer.current)
      timer.current = undefined
    }
  }
  return (
    <div onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}>
      {children}
    </div>
  )
}
