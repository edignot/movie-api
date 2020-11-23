const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())

const constants = require('./api/utility/constants')

app.use(express.json())

app.use('/api/movies', require('./api/routes/movieRouter'))

app.use((req, res, next) => {
  res.status(404).send(constants.API_ENDPOINTS_INFO)
  next()
})

module.exports = app
