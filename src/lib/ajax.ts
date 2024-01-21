import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useLoadingStore } from '../stores/useLoadingStore'

axios.defaults.baseURL = isDev ? '/' : 'http://121.196.236.94:8080/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000

// 动态配置项用拦截器来配置
axios.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('jwt') || ''
  config.headers = config.headers || {}
  if (jwt) { config.headers.Authorization = `Bearer ${jwt}` }
  return config
})

type Options = {
  showLoading?: boolean
}
export const useAjax = (options?: Options) => {
  const { setVisible } = useLoadingStore()
  const showLoading = options?.showLoading || false
  return {
    get: <T>(path: string, config?: AxiosRequestConfig<any>) => {
      return axios.get<T>(path, config)
    },
    post: <T>(path: string, data: JSONValue) => {
      if (showLoading) { setVisible(true) }
      return axios.post<T>(path, data).finally(() => {
        if (showLoading) { setVisible(false) }
      })
    },
    patch: () => { },
    delete: () => { },
  }
}
