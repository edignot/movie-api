const express = require('express')

const movieController = require('../controllers/movieController.js')

const router = express.Router()

router.route('/trending/:page').get(movieController.getTrendingMovies)

router.route('/:title/:page').get(movieController.getMoviesByTitle)

router
  .route('/:id')
  .get(movieController.getMovieDetails)
  .post(movieController.thumbUpOrDownMovie)

module.exports = router
