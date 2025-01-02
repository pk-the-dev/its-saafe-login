import { useState } from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  const [message, setMessage] = useState('Something Went Wrong')

  if (error) {
    setMessage(error.data.message)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>An error occurred</h1>
      <p>{{ message }}</p>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default ErrorPage
