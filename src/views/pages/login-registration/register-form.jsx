import { useAuth } from '@context/auth/auth.context.hook'
import { Button, Form, Input, message, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
const { Title } = Typography

const RegisterForm = () => {
  const { handleRequestOtp, handlePhoneNumberChange } = useAuth()
  const { t } = useTranslation()
  const [loginForm] = Form.useForm()

  const onFinish = (values) => {
    message.info(t('An OTP has been sent to your phone number'))
    handlePhoneNumberChange(values.phoneNumber)
    handleRequestOtp()
  }

  const validatePhoneNumber = (_, value) => {
    if (!value) {
      return Promise.reject(t('Phone number is required'))
    }
    const phoneRegex = /^\+?1?\d{7,15}$/ // Basic phone number regex (adjust as needed)
    if (!phoneRegex.test(value)) {
      return Promise.reject(t('Invalid Phone Number'))
    }
    return Promise.resolve()
  }

  return (
    <div style={{ width: '100%', minWidth: 320 }}>
      <Title level={3} style={{ textAlign: 'center' }}>
        {t('Sign up for Saafe')}
      </Title>
      <div style={{ textAlign: 'center', width: '100%', marginBlockEnd: 16 }}>
        {t('Please enter your phone number!')}
      </div>
      <Form
        form={loginForm}
        name="basic"
        layout="vertical" // Important for vertical layout
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: '100%' }}
      >
        <Form.Item
          name="phoneNumber"
          rules={[{ validator: validatePhoneNumber }]}
        >
          <Input size="large" placeholder={t('Phone Number')} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            block
          >
            {t('Request OTP')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegisterForm
