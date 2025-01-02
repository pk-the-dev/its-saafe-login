import { Outlet, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useEffect } from 'react'
import routes from '@routes'

function RootLayout() {
  const navigate = useNavigate()
  useEffect(() => {
    // if user session details is not available then redirect to login page
    navigate(routes.login)
  }, [])
  return (
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default RootLayout
