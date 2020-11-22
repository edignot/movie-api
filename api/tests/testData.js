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
]

exports.moviesMockResponseData = {
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
        'An imaginary world comes to life in a holiday tale of an eccentric toymaker.',
      poster_path: '/ecpe029lbZf0VOfVp9DK8Voy8Vc.jpg',
      popularity: 321.695,
      media_type: 'movie',
    },
  ],
  total_pages: 1000,
  total_results: 20000,
}

exports.movieDetailsMockResponseData = {
  adult: false,
  backdrop_path: '/43U2cghRI1o8pDi7FRKHsWAa9pr.jpg',
  belongs_to_collection: null,
  budget: 31000000,
  genres: [
    {
      id: 36,
      name: 'History',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 18,
      name: 'Drama',
    },
  ],
  homepage: '',
  id: 1,
  imdb_id: 'tt0089755',
  original_language: 'en',
  original_title: 'Out of Africa',
  overview:
    'Out of Africa tells the story of the life of Danish author Karen Blixen',
  popularity: 10.778,
  poster_path: '/3eLAm1kuVD5QZCOydbiu7j6GAbw.jpg',
  production_companies: [
    {
      id: 33,
      logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
      name: 'Universal Pictures',
      origin_country: 'US',
    },
    {
      id: 205,
      logo_path: null,
      name: 'Mirage Entertainment',
      origin_country: '',
    },
    {
      id: 932,
      logo_path: null,
      name: 'Mirage Enterprises',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '1985-12-20',
  revenue: 128499205,
  runtime: 161,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
    {
      english_name: 'Swahili',
      iso_639_1: 'sw',
      name: 'Kiswahili',
    },
  ],
  status: 'Released',
  tagline: 'Based on a true story.',
  title: 'Out of Africa',
  video: false,
  vote_average: 7.2,
  vote_count: 847,
}
