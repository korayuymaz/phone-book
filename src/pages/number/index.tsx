import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

import { faker } from '@faker-js/faker'
import List from '../../components/ui/List'

const Number = () => {
  const randomName = faker.person.fullName()
  const randomPhoneNumber = faker.phone.number({ style: 'international' })
  const navigate = useNavigate()

  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider')
  }

  const { isLoggedIn } = authContext

  const items = [
    {
      name: randomName,
      label: 'Name',
    },
    {
      name: randomPhoneNumber,
      label: 'Number',
    },
  ]
  
  if (isLoggedIn) {
    return <List items={items} />
  } else
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

export default Number
