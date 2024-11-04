import { useNavigate } from 'react-router-dom'
import './index.scss'

interface HeaderProps {
  isLoggedIn: boolean
  onLogout: () => void
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
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

        {isLoggedIn && <button onClick={onLogout}>Log out</button>}
      </div>
    </div>
  )
}

export default Header
