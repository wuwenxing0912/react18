import { Navigate, useLocation, useRouteError } from 'react-router-dom'
import { NoDataError, UnauthorizedError } from '../error'

export const ItemsPageError: React.FC = () => {
  const error = useRouteError() as Error
  const locationParams = useLocation()
  if (error instanceof NoDataError) {
    return <Navigate to='/home' replace/>
  } else if (error instanceof UnauthorizedError) {
    const redirect = encodeURIComponent(locationParams.pathname + locationParams.search)
    return <Navigate to={`/sign_in?redirect=${redirect}`}/>
  } else {
    return <div>出错了</div>
  }
}
