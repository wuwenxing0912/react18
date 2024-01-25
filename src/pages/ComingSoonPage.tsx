import { useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon'

export const ComingSoonPage: React.FC = () => {
  const nav = useNavigate()
  return (
    <div flex flex-col h-screen justify-center items-center gap-y-24px p-36px>
      <Icon name="pig" className="w-128px h-128px" />
      <h1>即将实现</h1>
      <button j-btn onClick={() => nav(-1)}>返回</button>
    </div>
  )
}
