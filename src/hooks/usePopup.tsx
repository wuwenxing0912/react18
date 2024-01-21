import type { ReactNode } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { Popup } from '../components/Popup'
import { rootDiv } from '../main'

type Options = {
  initVisible?: boolean
  children: ReactNode
  position?: 'bottom' | 'center'
}

export const usePopup = (options: Options) => {
  const { initVisible = false, children, position = 'bottom' } = options
  const [visible, setVisible] = useState(initVisible)
  const popup = ReactDOM.createPortal(<Popup visible={visible} onClickMask={() => setVisible(false)} position={position}>
    {children}
  </Popup>, rootDiv)
  return {
    popup,
    show() {
      setVisible(true)
    },
    hide() {
      setVisible(false)
    },
    toggle() {
      setVisible(!visible)
    }
  }
}
