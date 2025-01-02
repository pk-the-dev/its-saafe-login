import PropTypes from 'prop-types'
import { AuthContext } from './auth.context'
import { useState } from 'react'

export const AuthStates = Object.freeze({
  LOGIN: "login",
  OTP_REQUESTED: "otp-requested",
});

export const AuthProvider = ({ children }) => {
  const [authScreenType, setAuthScreenType] = useState(AuthStates.LOGIN)
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState('')

  const handleRequestOtp = () => setAuthScreenType(AuthStates.OTP_REQUESTED)
  const resetAuthScreenType = () => setAuthScreenType(AuthStates.LOGIN)
  const handlePhoneNumberChange = (value) => {
    setRegisterPhoneNumber(value)
  }

  return (
    <AuthContext.Provider
      value={{
        authScreenType,
        handleRequestOtp,
        resetAuthScreenType,
        registerPhoneNumber,
        handlePhoneNumberChange
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element,
}
