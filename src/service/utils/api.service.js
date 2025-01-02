/* eslint-disable  @typescript-eslint/no-explicit-any */
import axiosInstance from './axios-instance'

// Initialize API layer for HTTP methods
const apiService = {
  /**
   * This layer handles the GET method call
   * @param url
   * @param params
   * @returns
   */
  get: async (url, params) => {
    try {
      const response = await axiosInstance.get(url, { params })
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error_description || error)
    }
  },

  /**
   * This layer handles the POST method call
   * @param url
   * @param data - payload for create operation
   * @returns
   */
  post: async (url, data) => {
    try {
      const response = await axiosInstance.post(url, data)
      return response.data
    } catch (error) {
      throw new Error(
        error.response?.data?.error_description ||
          error.response?.message ||
          error,
      )
    }
  },

  /**
   * This layer handles the PUT method call
   * @param url
   * @param data - payload for update operation
   * @returns
   */
  put: async (url, data) => {
    try {
      const response = await axiosInstance.put(url, data)
      return response.data
    } catch (error) {
      throw new Error(
        error.response?.data?.error_description ||
          error.response?.message ||
          error,
      )
    }
  },

  /**
   * This layer handles the PATCH method call
   * @param url
   * @param data - payload for partial update operation
   * @returns
   */
  patch: async (url, data) => {
    try {
      const response = await axiosInstance.patch(url, data)
      return response.data
    } catch (error) {
      throw new Error(
        error.response?.data?.error_description ||
          error.response?.message ||
          error,
      )
    }
  },

  /**
   * This layer handles the DELETE method call
   * @param url
   * @returns
   */
  delete: async (url) => {
    try {
      const response = await axiosInstance.delete(url)
      return response.data
    } catch (error) {
      throw new Error(
        error.response?.data?.error_description ||
          error.response?.message ||
          error,
      )
    }
  },
}

export default apiService
