import React from 'react'
import useLoadingState from '@hooks/useLoadingState'
import './loader.scss'

const AppLoader = () => {
  const { isLoading } = useLoadingState()

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="loader spin-anim" />
        </div>
      )}
    </>
  )
}

export default AppLoader
