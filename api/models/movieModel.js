const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  poster_path: { type: String, required: true },
  up_vote: { type: Number },
  down_vote: { type: Number },
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
