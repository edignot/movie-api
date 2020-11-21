exports.BASE_URL = 'https://api.themoviedb.org/3/'

exports.API_ENDPOINTS_INFO = {
  message: `This API endpoint doesn't exist`,
  endpoints: [
    {
      endpoint: '/api/movies/trending/:page',
      method: 'get',
      details: 'page is a number 1-1000',
    },
    {
      endpoint: '/api/movies/:title/:page',
      method: 'get',
      details: 'search by title, page is a number 1-1000',
    },
    {
      endpoint: '/api/movies/:id',
      method: 'get',
      details: 'valid movie id ( number )',
    },
    {
      endpoint: '/api/movies/:id',
      method: 'post',
      body: {
        title: 'title',
        posterPath: 'poster path',
        vote: 'up',
      },
      details: `vote value can be either 'down' or 'up'`,
    },
  ],
}
