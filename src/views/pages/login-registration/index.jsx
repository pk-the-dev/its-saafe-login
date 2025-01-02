import { useEffect, useState } from 'react'

import { Row, Col, Flex, Image, Select, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import OTPForm from './otp-form'
import RegisterForm from './register-form'
import SaafeWorkFlowAnimator from '../../components/app-steps/app-steps.animation'
import './login-page.scss'

import Logo from '@assets/images/logo.svg'
import AnimatedMeshContainer from '@comps/animated-mesh-container/mesh-container'
import { AuthStates } from '@context/auth/auth.context.provider'
import { SUPPORTING_LANGUAGES } from '@context/app-settings/app-settings.context.provider'
import { useAuth } from '@context/auth/auth.context.hook'
import { useAppSettings } from '@context/app-settings/app-settings.context.hook'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const LoginPage = () => {
  const { authScreenType } = useAuth()
  const { selectedLanguage, handleLanguageSelection } = useAppSettings()
  const { t } = useTranslation()

  useEffect(() => {
    const token = sessionStorage.getItem('access_token')

    if (token) {
      // check token validity api
      // then directly load the home page
    }
    console.log(selectedLanguage)
  }, [selectedLanguage])

  return (
    <Row>
      <Col xs={24} className="main-container">
        <div className="mesh-container">
          <AnimatedMeshContainer>
            <Flex
              gap={8}
              vertical
              style={{ paddingBlock: 16, paddingInline: 24 }}
            >
              <Title level={3} style={{ color: 'white' }}>
                {t('Share your financial information safely')}
              </Title>
              <SaafeWorkFlowAnimator />
            </Flex>
          </AnimatedMeshContainer>
        </div>
        <div style={{ width: '100%' }}>
          <div className="language-selector">
            <Select
              variant="borderless"
              suffixIcon={<DownOutlined className="down-icon" />}
              size="large"
              value={selectedLanguage}
              onChange={(selectedLanguage) =>
                handleLanguageSelection(selectedLanguage)
              }
              style={{ textTransform: 'capitalize' }}
            >
              {SUPPORTING_LANGUAGES.map((item) => (
                <Select.Option key={item.lang} value={item.lang}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
          </div>
          <Flex
            vertical="true"
            align="center"
            justify="center"
            className="right-pane"
          >
            <div className="right-pane-container">
              <Image src={Logo} alt="saafe-logo" className="logo" />
              {AuthStates.OTP_REQUESTED === authScreenType ? (
                <OTPForm />
              ) : (
                <RegisterForm />
              )}
            </div>
          </Flex>
        </div>
      </Col>
      <div style={{ position: 'absolute', bottom: 8, right: 8 }}>v0.0.1</div>
    </Row>
  )
}

export default LoginPage
