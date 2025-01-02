import { useContext } from 'react'
import { AppSettingsContext } from './app-settings.context'

export const useAppSettings = () => {
  return useContext(AppSettingsContext)
}
