import { Navigate, useLocation, useRouteError } from 'react-router-dom'
import { UnauthorizedError } from '../error'

export const ErrorPage: React.FC = () => {
  const locationParams = useLocation()
  const redirect = encodeURIComponent(locationParams.pathname + locationParams.search)
  const error = useRouteError() as Error
  if (error instanceof UnauthorizedError) {
    return <Navigate to={`/sign_in?redirect=${redirect}`}/>
  } else {
    return <div>出错了</div>
  }
}
