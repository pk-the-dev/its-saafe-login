import React from 'react'
import { Link } from 'react-router-dom' // Or use a library like Next.js's Link

const NotFoundPage = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: 200,
        color: 'var(--secondary-color-8)',
      }}
    >
      <h1>404: Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default NotFoundPage
