import { AUTH_ENDPOINTS } from './utils/api.constants'
import apiService from './utils/api.service'

export const userRegisterService = async (data) => {
  try {
    const response = await apiService.post(AUTH_ENDPOINTS.REGISTER, data)
    return response
  } catch (error) {
    console.error('Unable to Register', error)
    throw error
  }
}

export default {
  userLoginService,
}
