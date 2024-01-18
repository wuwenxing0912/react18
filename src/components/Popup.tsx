import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'

type Props = {
  visible: boolean
  onClickMask?: () => void
}
export const Popup: React.FC<Props> = (props) => {
  const { onClickMask, visible } = props
  const [maskVisible, setMaskVisible] = useState(visible)
  const maskStyles = useSpring({
    opacity: visible ? 1 : 0,
    onStart: ({ value }) => {
      if (value.opacity < 0.1) { setMaskVisible(true) }
    },
    onRest: ({ value }) => {
      if (value.opacity < 0.1) { setMaskVisible(false) }
    }
  })
  const menuStyles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0%)' : 'translateY(100%)',
  })
  const styles = {
    ...maskStyles,
    visibility: (maskVisible ? 'visible' : 'hidden') as 'visible' | 'hidden'
  } // workaround
  return (
    <div>
      <animated.div fixed top-0 left-0 h-full w-full className="bg-black:75"
        z="[calc(var(--z-popup)-1)]" style={styles} onClick={() => onClickMask?.()} />
      <animated.div fixed bottom-0 left-0 min-h-100px w-full bg-white
        z="[calc(var(--z-popup))]" style={menuStyles} />
    </div>
  )
}
