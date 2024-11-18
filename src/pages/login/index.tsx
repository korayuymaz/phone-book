import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import Form from '../../components/ui/Form'
// import handleLogin from '../../lib/utils/handleLogin'
// import handleLogout from '../../lib/utils/handleLogout'
import { AuthContext } from '../../contexts/AuthContext'

const LoginForm = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  const { isLoggedIn, setIsLoggedIn, setToken, setUserID } = context

  const handleLogin = (token: string, userID: string) => {
    setToken(token)
    setIsLoggedIn(true)
    setUserID(userID)
    localStorage.setItem('token', token)
    navigate('/')
  }

  const handleLogout = () => {
    setToken(null)
    setIsLoggedIn(false)
    setUserID('')
    localStorage.removeItem('token')
    navigate('/')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3050/login', {
        username,
        password,
      })
      const token = response.data.token
      const userID = response.data.user_id
      handleLogin(token, userID)
    } catch (err) {
      setError('Login failed. Please check your credentials.')
    }
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
