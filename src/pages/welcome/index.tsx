import { useState } from 'react'
import Login from '../login'

const Welcome = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  )

  const handleLoginSuccess = (jwtToken: string) => {
    setToken(jwtToken)
  }

  const handleLogout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }
  return (
    <div>
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  )
}

export default Welcome
