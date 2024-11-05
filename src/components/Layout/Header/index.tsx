import handleLogout from '../../../lib/utils/handleLogout'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'

const Header = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  const { isLoggedIn, setIsLoggedIn, setToken } = context

  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="header-logo">
        <button
          onClick={() => {
            navigate('/')
          }}
        >
          Home
        </button>
      </div>
      <div className="header-links">
        <div>
          <button
            onClick={() => {
              navigate('/numbers')
            }}
          >
            Numbers
          </button>
        </div>
        {!isLoggedIn && (
          <div>
            <button
              onClick={() => {
                navigate('/login')
              }}
            >
              Login
            </button>
          </div>
        )}

        {!isLoggedIn && (
          <div>
            {' '}
            <button
              onClick={() => {
                navigate('/sign-up')
              }}
            >
              Sign Up
            </button>
          </div>
        )}

        {isLoggedIn && (
          <button onClick={() => handleLogout(setIsLoggedIn, setToken)}>
            Log out
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
