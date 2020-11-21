const Movie = require('../models/movieModel')

const networkCalls = require('../utility/networkCalls')

exports.getTrendingMovies = async (req, res) => {
  const { page } = req.params
  const movies = await networkCalls.fetchTrendingMovies(page)
  res.json(movies)
}

exports.getMoviesByTitle = async (req, res) => {
  // const { title, page } = req.params
  // const movies = await fetchMoviesByTitle(title, page)
  // res.json(movies)
  res.json('get movies by title')
}

exports.getMovieDetails = async (req, res) => {
  // const { id } = req.params
  // const movie = await fetchMovieDetails(id)
  // res.json(movie)
  res.json('get movie details')
}

exports.thumbUpOrDownMovie = async (req, res) => {
  const newMovie = new Movie({
    id: 1,
    title: 'title',
    poster_path: 'poster path',
    up_vote: 1,
    down_vote: 1,
  })

  newMovie
    .save()
    .then(() => res.status(200).json(newMovie))
    .catch((error) =>
      res.status(500).json({ message: 'Something went wrong...', error }),
    )

  // const { id } = req.params
  // const { title, posterPath, vote } = req.body

  // const savedMovie = await Movie.findOne({ id: id })

  // if (!savedMovie) {
  //   const newMovie = new Movie({
  //     id: id,
  //     title: title,
  //     poster_path: posterPath,
  //     up_vote: vote === 'up' ? 1 : 0,
  //     down_vote: vote === 'down' ? 1 : 0,
  //   })

  //   newMovie
  //     .save()
  //     .then(() => res.status(200).json(newMovie))
  //     .catch((error) =>
  //       res.status(500).json({ message: 'Something went wrong...', error }),
  //     )
  // } else if (savedMovie && vote === 'up') {
  //   Movie.findByIdAndUpdate(
  //     savedMovie._id,
  //     { $inc: { up_vote: 1 } },
  //     { new: true },
  //   )
  //     .then((updatedMovie) => res.status(200).json(updatedMovie))
  //     .catch((error) =>
  //       res.status(500).json({ message: 'Something went wrong...', error }),
  //     )
  // } else if (savedMovie && vote === 'down') {
  //   Movie.findByIdAndUpdate(
  //     savedMovie._id,
  //     { $inc: { down_vote: 1 } },
  //     { new: true },
  //   )
  //     .then((updatedMovie) => res.status(200).json(updatedMovie))
  //     .catch((error) =>
  //       res.status(500).json({ message: 'Something went wrong...', error }),
  //     )
  // }
}
