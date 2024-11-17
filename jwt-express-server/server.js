require('dotenv').config()
const express = require('express')
const authRoutes = require('./routes/auth')

const app = express()
const PORT = process.env.PORT || 5000

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.json())
app.use('', authRoutes)
app.use('/login', authRoutes)
app.use('/numbers/:user_id', authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
