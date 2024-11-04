import React, { useState } from 'react'
import axios from 'axios'
import Form from '../../components/ui/Form'

interface LoginFormProps {
  isLoggedIn: boolean
  onLoginSuccess: (token: string) => void
  onLogout: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({
  isLoggedIn,
  onLoginSuccess,
  onLogout,
}) => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3050/login', {
        username,
        password,
      })
      const token = response.data.token
      onLoginSuccess(token)
      localStorage.setItem('token', token) // Storing the token in localStorage
    } catch (err) {
      setError('Login failed. Please check your credentials.')
    }
  }

  const handleLogout = () => {
    onLogout()
  }

  const inputs = [
    {
      type: 'text',
      name: 'User Name:',
      handleFunction: setUserName,
      value: username,
    },
    {
      type: 'password',
      name: 'Password:',
      handleFunction: setPassword,
      value: password,
    },
  ]

  return (
    <div>
      {isLoggedIn && <button onClick={handleLogout}>Log Out</button>}
      {!isLoggedIn && (
        <Form
          handleSubmit={handleSubmit}
          inputs={inputs}
          submitButtonInnerValue={'Login'}
        />
      )}
      {error && <div>{error}</div>}
    </div>
  )
}

export default LoginForm
