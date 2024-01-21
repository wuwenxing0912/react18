import useSWR from 'swr'
import { Navigate, useNavigate } from 'react-router-dom'
import type { AxiosError } from 'axios'
import p from '../assets/images/pig.svg'
import { useAjax } from '../lib/ajax'
import { useTitle } from '../hooks/useTitle'
import { Loading } from '../components/Loading'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
interface Props {
  title?: string
}
export const Home: React.FC<Props> = (props) => {
  useTitle(props.title)
  const nav = useNavigate()
  const { get } = useAjax()
  const handleHttpError = (error: AxiosError) => {
    if (error.response?.status === 401) {
      nav('/sign_in')
    }
    throw error
  }
  const { data: meData, error: meError } = useSWR('/api/v1/me', async path => {
    const res = await get<Resource<User>>(path).catch(handleHttpError)
    return res?.data?.resource
  }
  )
  const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, async path =>
    (await get<Resources<Item>>(path)).data
  )

  const isLoadingMe = !meData && !meError
  const isLoadingItems = meData && !itemsData && !itemsError

  if (isLoadingMe || isLoadingItems) {
    return <Loading className="h-screen" />
  }

  if (itemsData?.resources[0]) {
    return <Navigate to="/items" />
  }

  return <div>
    <div flex justify-center items-center>
      <img mt-20vh mb-20vh width="128" height="130" src={p} />
    </div>
    <div px-16px>
      <button j-btn>开始记账</button>
    </div>
    <AddItemFloatButton />
  </div >
}
