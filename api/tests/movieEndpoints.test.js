require('dotenv').config()
const mongoose = require('mongoose')
const nock = require('nock')
const supertest = require('supertest')
const app = require('../../app')
const Movie = require('../models/movieModel')
const testData = require('./testData')
const constants = require('../utility/constants')
const request = supertest(app)

describe('Movie API endpoints', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1/movies', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  })

  beforeEach(async () => {
    for (votedMovie of testData.votedMovies) {
      const newMovie = new Movie({
        id: votedMovie.id,
        title: votedMovie.title,
        poster_path: votedMovie.poster_path,
        up_vote: votedMovie.up_vote,
        down_vote: votedMovie.down_vote,
      })
      await newMovie.save()
    }
  })

  afterEach(async () => {
    await Movie.deleteMany()
  })

  afterAll(async () => {
    await Movie.drop()
    await mongoose.connection.close()
  })

  test('GET | get list of trending movies from downstream api', async (done) => {
    const mockedResponse = testData.trendingMoviesMockResponse
    const page = 1

    nock(constants.BASE_URL)
      .get(`/trending/all/day?api_key=${process.env.TMDB_KEY}&page=${page}`)
      .reply(200, mockedResponse)

    const res = await request.get('/api/movies/trending/1')

    expect(res.status).toBe(200)

    expect(res.body.page).toBe(page)

    expect(res.body.results.length).toBe(
      testData.trendingMoviesMockResponse.results.length,
    )

    expect(res.body.total_pages).toBe(
      testData.trendingMoviesMockResponse.total_pages,
    )

    expect(res.body.total_results).toBe(
      testData.trendingMoviesMockResponse.total_results,
    )

    done()
  })
})
