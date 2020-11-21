exports.votedMovies = [
  {
    id: 1,
    title: 'title 1',
    poster_path: 'poster 1',
    up_vote: 11,
    down_vote: 1,
  },
  {
    id: 2,
    title: 'title 2',
    poster_path: 'poster 2',
    up_vote: 22,
    down_vote: 2,
  },
  {
    id: 3,
    title: 'title 3',
    poster_path: 'poster 3',
    up_vote: 33,
    down_vote: 3,
  },
]

exports.trendingMoviesMockResponse = {
  page: 1,
  results: [
    {
      id: 622855,
      video: false,
      vote_count: 87,
      vote_average: 7.5,
      title: 'Jingle Jangle: A Christmas Journey',
      release_date: '2020-11-06',
      original_language: 'en',
      original_title: 'Jingle Jangle: A Christmas Journey',
      genre_ids: [10751, 14, 10402],
      backdrop_path: '/6C7ZGYeR8QpT3X6C2RFEu6yiSKK.jpg',
      adult: false,
      overview:
        'An imaginary world comes to life in a holiday tale of an eccentric toymaker, his adventurous granddaughter, and a magical invention that has the power to change their lives forever.',
      poster_path: '/ecpe029lbZf0VOfVp9DK8Voy8Vc.jpg',
      popularity: 321.695,
      media_type: 'movie',
    },
  ],
  total_pages: 1000,
  total_results: 20000,
}
