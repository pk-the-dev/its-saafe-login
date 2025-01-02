import { useState, useEffect } from 'react'
import axiosInstance from '@service/utils/axios-instance'

const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(false)

  // instead react promise tracker
  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        setIsLoading(true)
        return config
      },
    )

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        setIsLoading(false)
        return response
      },
      (error) => {
        setIsLoading(false)
        return Promise.reject(error)
      },
    )

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
      axiosInstance.interceptors.response.eject(responseInterceptor)
    }
  }, [])

  return { isLoading: isLoading }
}

export default useLoadingState
