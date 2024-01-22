import { Navigate, useRouteError } from 'react-router-dom'
import { NoDataError, UnauthorizedError } from '../error'

export const ItemsPageError: React.FC = () => {
  const error = useRouteError() as Error

  if (error instanceof NoDataError) {
    return <Navigate to='/home' replace/>
  } else if (error instanceof UnauthorizedError) {
    return <Navigate to='/sign_in'/>
  } else {
    return <div>出错了</div>
  }
}
