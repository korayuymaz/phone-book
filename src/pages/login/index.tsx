import React, { useState } from 'react'
import axios from 'axios'

interface LoginFormProps {
  onLoginSuccess: (token: string) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:3050/login', {
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

  return (
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
  )
}

export default LoginForm
