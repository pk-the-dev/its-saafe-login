import { createBrowserRouter } from 'react-router-dom'

import routes from './routes.library'

import RootLayout from '@views/layout/root.layout'

import NotFoundPage from '@pages/error/404'
import LoginPage from '@src/views/pages/login-registration'
import { AuthProvider } from '@src/context-api/auth/auth.context.provider'

const routesConfig = createBrowserRouter([
  {
    path: routes.login,
    element:<AuthProvider><LoginPage /></AuthProvider> ,
  },
  {
    path: '',
    element: <RootLayout />,
    children: [
      // {
      //   path: routes.dashboard,
      //   element: <DashboardPage />,
      // },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default routesConfig
