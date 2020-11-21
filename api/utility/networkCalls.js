const fetch = require('node-fetch')

const constants = require('./constants')

exports.fetchMoviesByTitle = async (title, page) => {
  return await fetch(
    `${constants.BASE_URL}search/movie?api_key=${process.env.TMDB_KEY}&language=en-US&query=${title}&page=${page}&include_adult=false`,
  )
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

exports.fetchMovieDetails = async (id) => {
  return await fetch(
    `${constants.BASE_URL}movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`,
  )
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

exports.fetchTrendingMovies = async (page) => {
  return await fetch(
    `${constants.BASE_URL}trending/all/day?api_key=${process.env.TMDB_KEY}&page=${page}`,
  )
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
