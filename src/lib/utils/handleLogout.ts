import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const handleLogout = (
  setIsLoggedIn: (value: boolean) => void,
  setToken: (value: string | null) => void
) => {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider')
  }

  setToken(null)
  setIsLoggedIn(false)
  localStorage.removeItem('token')
  navigate('/')
  return true
}

export default handleLogout
