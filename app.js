const express = require('express')

const app = express()

app.use(express.json())

app.use('/api/movies', require('./api/routes/movieRouter'))

module.exports = app
