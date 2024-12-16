import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

import List from '../../components/ui/List'
import axiosInstance from '../../lib/interceptors'
import './index.scss'

const Number = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  const { isLoggedIn, userID } = context

  const [numbers, setNumbers] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const fetchNumbers = async () => {
    try {
      // Send GET request to the API
      const response = await axiosInstance.get(`/numbers/${userID}`)
      setNumbers(response.data) // Extract numbers from the response
      setLoading(false)
      console.log(response.data)
    } catch (err) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNumbers()
  }, [])

  return (
    <div className="numbers">
      {loading && <p>Loading...</p>}
      {isLoggedIn && numbers ? (
        <List items={numbers} />
      ) : (
        <div>
          You should logged in to see your phone book{' '}
          <button
            onClick={() => {
              navigate('/login')
            }}
          >
            <span className="numbers__span">Login Here...</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Number
