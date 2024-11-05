import { Route, Routes } from 'react-router-dom'

import Header from './components/Layout/Header'

import LoginForm from './pages/login'
import Welcome from './pages/welcome'
import Number from './pages/number'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login/" element={<LoginForm />} />
        <Route path="/numbers/" element={<Number />} />
      </Routes>
    </div>
  )
}

export default App
