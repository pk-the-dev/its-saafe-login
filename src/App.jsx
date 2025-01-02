import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import '@src/App.scss'
import AppLoader from '@comps/loader/loader'
import routesConfig from './routes/route.config'
import { AppSettingsProvider } from '@context/app-settings/app-settings.context.provider'

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              optionSelectedBg: 'rgba(0,0,0,0.2)',
            },
          },
          token: {
            colorPrimary: '#008e9a',
            borderRadius: 8,
            fontFamily: 'Poppins',
            colorText: '#667085'
          },
        }}
      >
        <AppLoader />
        <AppSettingsProvider>
          <RouterProvider router={routesConfig} />
        </AppSettingsProvider>
      </ConfigProvider>
    </>
  )
}

export default App
