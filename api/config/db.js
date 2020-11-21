const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB successfully connected: ${connection.connection.host}`)
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
