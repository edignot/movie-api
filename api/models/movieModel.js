const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String },
  poster_path: { type: String },
  backdrop_path: { type: String },
  release_date: { type: String },
  original_language: { type: String },
  overview: { type: String },
  media_type: { type: String },
  name: { type: String },
  up_vote: { type: Number },
  down_vote: { type: Number },
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
