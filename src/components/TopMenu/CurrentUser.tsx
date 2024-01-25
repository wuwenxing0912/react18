import { Link, useLocation } from 'react-router-dom'
import useSWR from 'swr'
import { useAjax } from '../../lib/ajax'
import { comfirmable } from '../../lib/comfirmable'

interface Props {
  className?: string
}
export const CurrentUser: React.FC<Props> = ({ className }) => {
  const { get } = useAjax({ showLoading: false, handleError: false })
  const { data, error } = useSWR('/api/v1/me', async (path) => (await get<Resource<User>>(path)).data.resource)
  const locctionParams = useLocation()
  const from = encodeURIComponent(`${locctionParams.pathname}${locctionParams.search}`)
  const logout = comfirmable('确定要退出登录吗？', () => {
    window.localStorage.removeItem('jwt')
    window.location.reload()
  })
  return (
    <div className={className} bg="#5C33BE" text-white w="100%" pt-32px pb-44px
      px-16px>
      {error
        ? (<Link to={`/sign_in?from=${from}`}>
          <h2 text-24px>未登录用户</h2>
          <div text="#CEA1FF">点击这里登录</div>
        </Link>)
        : (<div onClick={logout}>
          <h2 text-24px title={data?.name || data?.email} overflow-hidden text-ellipsis>
            {data?.name || data?.email}
          </h2>
          <div text="#CEA1FF">点击退出登录</div>
        </div>)}
    </div>
  )
}
