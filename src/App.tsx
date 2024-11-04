import Header from './components/Header'
import LoginForm from './pages/login'
import Welcome from './pages/welcome'

import { useState } from 'react'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  )

  const handleLoginSuccess = (jwtToken: string) => {
    setToken(jwtToken)
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setToken(null)
    setLoggedIn(false)
    localStorage.removeItem('token')
  }
  return (
    <div>
      <Header />
      <Welcome />
      <LoginForm
        isLoggedIn={isLoggedIn}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
      />
    </div>
  )
}

export default App
