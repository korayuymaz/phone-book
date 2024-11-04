import React, { useState } from 'react'
import axios from 'axios'

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

  return (
    <div>
      {isLoggedIn && <button onClick={handleLogout}>Log Out</button>}
      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Name:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  )
}

export default LoginForm
