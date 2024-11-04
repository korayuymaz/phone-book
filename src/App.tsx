import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Header from './components/Layout/Header'
import LoginForm from './pages/login'
import Welcome from './pages/welcome'

import { useState } from 'react'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  )
  const navigate = useNavigate()

  const handleLoginSuccess = (jwtToken: string) => {
    setToken(jwtToken)
    setLoggedIn(true)
    navigate('/')
  }

  const handleLogout = () => {
    setToken(null)
    setLoggedIn(false)
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div>
      <Header onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/login/"
          element={
            <LoginForm
              isLoggedIn={isLoggedIn}
              onLoginSuccess={handleLoginSuccess}
              onLogout={handleLogout}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
