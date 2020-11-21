const fetch = require('node-fetch')

const BASE_URL = 'https://api.themoviedb.org/3/'

export const fetchTrendingMovies = async (page) => {
  return await fetch(
    `${BASE_URL}trending/all/day?api_key=${process.env.TMDB_KEY}&page=${page}`,
  )
    .then((response) => response.json())
    .catch((error) => console.log(error))
}