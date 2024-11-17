/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { faker, da } = require('@faker-js/faker')
const router = express.Router()
const authenticateToken = require('../middleware/authMiddleware')

//Check server working
router.get('/', (req, res) => {
  res.send('Home page!')
})

// Protected route
router.get('/protected', authenticateToken, (req, res) => {
  res.json({
    message: `Hello, ${req.user.username}. This is a protected route!`,
  })
})

// Dummy user data
const users = [
  { id: 1, username: 'user1', password: bcrypt.hashSync('password', 10) },
]

//Dummy numbers data

const numbers = [
  {
    user_id: '1',
    name: faker.person.fullName(),
    number: faker.phone.number({ style: 'international' }),
  },
  {
    user_id: '1',
    name: faker.person.fullName(),
    number: faker.phone.number({ style: 'international' }),
  },
]

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = users.find((u) => u.username === username)

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    res.json({ token })
  } else {
    res.status(401).json({ message: 'Invalid credentials' })
  }
})

//Get numbers route
router.get('/numbers/:user_id', (req, res) => {
  let { user_id } = req.params

  const data = numbers.filter((number) => {
    return number.user_id === user_id
  })

  res.send(data)
})

module.exports = router
