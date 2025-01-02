import PropTypes from 'prop-types'
import { AppSettingsContext } from './app-settings.context'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const SUPPORTING_LANGUAGES = [
  { lang: 'en', label: 'English' },
  { lang: 'ta', label: 'தமிழ்' },
  { lang: 'hi', label: 'हिन्दी' }
]

export const AppSettingsProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(SUPPORTING_LANGUAGES[0].lang)
  const { t, i18n } = useTranslation();

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language)
    i18n.changeLanguage(language)
  }

  return (
    <AppSettingsContext.Provider
      value={{
        selectedLanguage,
        handleLanguageSelection,
      }}
    >
      {children}
    </AppSettingsContext.Provider>
  )
}

AppSettingsProvider.propTypes = {
  children: PropTypes.element,
}
