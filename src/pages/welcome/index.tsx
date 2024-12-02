import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button'
import './index.scss'

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <h2>Phone Book</h2>
      <h3>The library where you can keep your numbers</h3>
      <div className='home__links'>
        <Button
          variant={'link'}
          onClick={() => {
            window.open('https://github.com/korayuymaz/phone-book')
          }}
          text={'Github Page'}
        />
        <Button
          text={'Your PhoneBook'}
          variant={'secondary'}
          onClick={() => {
            navigate('/numbers')
          }}
        />
      </div>
    </div>
  )
}

export default Welcome
