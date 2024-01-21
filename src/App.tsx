import { RouterProvider } from 'react-router-dom'
import vhCheck from 'vh-check'
import styled from 'styled-components'
import { useEffect } from 'react'
import { router } from './routes/router'
import './global.scss'
import 'virtual:uno.css'
import './app.scss'
import 'virtual:svgsprites'
import { Icon } from './components/Icon'
import { usePopup } from './hooks/usePopup'
import { useLoadingStore } from './stores/useLoadingStore'
vhCheck()

export const App: React.FC = () => {
  const { visible } = useLoadingStore()
  const { show, hide, popup } = usePopup({
    children: <div p-16px><SpinLoading className='h-32px w-32px' name='loading'/></div>,
    position: 'center'
  })
  useEffect(() => {
    visible ? show() : hide()
  }, [visible])
  return (
    <div>
      {popup}
      <RouterProvider router={router} />
    </div>
  )
}

const SpinLoading = styled(Icon)`
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
animation: spin 1.25s linear infinite;
`
