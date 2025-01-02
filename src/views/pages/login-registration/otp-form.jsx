import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, Form, Input, message, Typography, Checkbox, Flex } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'
import { useAuth } from '@context/auth/auth.context.hook'

const { Title, Text } = Typography

const OTPForm = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { registerPhoneNumber } = useAuth()

  const [otpForm] = Form.useForm()
  const [isTermsAgreed, setIsTermsAgreed] = useState(false)
  const [timer, setTimer] = useState(60)

  useEffect(() => {
    startTimer(timer)
    return () => {
      setTimer(0)
    }
  }, [])

  const onFinish = (values) => {
    let otp = values.otp
    const validOtp = /^\d+$/.test(otp)

    if (!validOtp) {
      message.error(t('Invalid OTP'))
      return
    }

    message.success(t('OTP Verified'))
    // navigate to dashboard
  }

  const onChangeTermsAgree = (event) => {
    setIsTermsAgreed(event.target.checked)
  }

  const startTimer = (duration) => {
    setTimer(duration)

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(intervalId)
          return 0
        }
        return prevTimer - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }

  const getFormattedTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const resendOTP = () => {
    setTimer(60)
    startTimer()
  }

  return (
    <div style={{ width: '100%', minWidth: 320 }}>
      <Title level={3} style={{ textAlign: 'center' }}>
        {t('Sign up for Saafe')}
      </Title>
      <div style={{ textAlign: 'center', width: '100%', marginBlockEnd: 16 }}>
        {t('Enter the OTP we have sent to')} <span style={{ fontWeight: "var(--font-weight-bold)"}}>{registerPhoneNumber}</span>
      </div>
      <Form
        form={otpForm}
        name="basic"
        layout="vertical" // Important for vertical layout
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: '100%' }}
      >
        <Form.Item
          name="otp"
          style={{
            display: 'flex',
            justifyContent: 'center',
            direction: 'column',
          }}
        >
          <Input.OTP
            length={4}
            mask="🔒"
            size="large"
            style={{ width: 232, gap: 24, height: 40 }}
          />
        </Form.Item>

        {timer != 0 && (
          <div style={{ fontWeight: 'bold' }}>
            {t('Resend code in')} {getFormattedTime(timer)}
          </div>
        )}

        {timer === 0 && (
          <div>
            <Flex style={{ fontWeight: 'bold' }} gap={8} align="center">
              {t('Resend code')}
              <Button variant="text" type="text" onClick={resendOTP}>
                <ReloadOutlined />
              </Button>
            </Flex>
          </div>
        )}

        <Checkbox onChange={onChangeTermsAgree} style={{ marginBlock: 24 }}>
          {t('I agree to the Terms & Conditions and Privacy Policy')}
        </Checkbox>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            block
            htmlType="submit"
            disabled={!isTermsAgreed || !otpForm.getFieldValue('otp')}
          >
            {t('Submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default OTPForm
