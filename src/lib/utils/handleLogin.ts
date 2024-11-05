import { useNavigate } from 'react-router-dom'

const handleLogin = (
  jwtToken: string,
  setIsLoggedIn: (value: boolean) => void,
  setToken: (value: string | null) => void
) => {
  const navigate = useNavigate()
  setToken(jwtToken)
  setIsLoggedIn(true)
  navigate('/')
  return true
}

export default handleLogin
