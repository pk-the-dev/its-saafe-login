import axios from 'axios'

/**
 * Create axios instance with base url for API call
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost:8888/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Create interceptor to handle request for API call
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token to headers before request is sent
    const accessToken = sessionStorage.getItem('access_token') || ''
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

/**
 * create interceptor to handle response for API call
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      // Handle error if error is 401. This is used specially when token is expired and get refresh token service will go here.
    } else if ([404, 500, 503].includes(error.response.status)) {
      return Promise.reject(
        error.response?.error_message || 'An unexpected error occurred.',
      )
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
