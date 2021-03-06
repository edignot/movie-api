require('dotenv').config()

const app = require('./app')

const connectDB = require('./api/config/db')

connectDB()

const port = process.env.PORT || 5000

app.listen(port, () =>
  console.log(`Server is successfully running on port ${port}`),
)
