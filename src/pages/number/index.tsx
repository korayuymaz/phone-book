import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

import List from '../../components/ui/List'
import axiosInstance from '../../lib/interceptors'

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
    } catch (err) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNumbers()
  }, [])

  if (loading) return <p>Loading...</p>

  if (isLoggedIn && numbers) {
    return <List items={numbers} />
  } else {
    return (
      <div>
        You should logged in to see your phone book{' '}
        <button
          onClick={() => {
            navigate('/login')
          }}
        >
          <span style={{ color: 'blue' }}>Login Here...</span>
        </button>
      </div>
    )
  }
}

export default Number
