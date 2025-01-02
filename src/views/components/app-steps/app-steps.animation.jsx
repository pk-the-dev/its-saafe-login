import React from 'react'
import { Row, Col, Image, Typography } from 'antd'

import LoginCheck from '@assets/icons/login-check.svg'
import Link from '@assets/icons/link.svg'
import Document from '@assets/icons/document.svg'

import './app-steps.animation.scss'
import { useTranslation } from 'react-i18next'

const { Title, Text } = Typography

const SaafeAppSteps = () => {
  const { t } = useTranslation()

  const workFlowSteps = [
    {
      icon: LoginCheck,
      imageAlt: 'shield icon for login step',
      title: t('Log in/Sign Up'),
      description: t('Enter the OTP sent to your mobile'),
    },
    {
      icon: Link,
      imageAlt: 'link icon for sharing step',
      title: t('Select accounts to share'),
      description: t("Choose the accounts you'd like to share"),
    },
    {
      icon: Document,
      imageAlt: 'document icon for review consent step',
      title: t('Review Consent'),
      description: t('Approve or reject after reviewing the details'),
    },
  ]
  return (
    <div className="steps-container">
      <Row>
        <Col span={24}>
          {workFlowSteps.map((step, index) => {
            return (
              <div
                className={`step ${index === workFlowSteps.length - 1 ? 'last' : ''}`}
                key={index}
              >
                <div className="circle">
                  <Image src={step.icon} alt={step.imageAlt} className="icon" />
                </div>
                <div className="step-content">
                  <Title level={3} style={{ margin: 0, color: 'white' }}>
                    {step.title}
                  </Title>
                  <Text style={{ margin: 0, color: 'white' }}>
                    {step.description}
                  </Text>
                </div>
              </div>
            )
          })}
        </Col>
      </Row>
    </div>
  )
}

export default SaafeAppSteps
