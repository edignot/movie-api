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

  test('GET | get list of trending movies from downstream API', async (done) => {
    const mockedResponse = testData.moviesMockResponseData
    const page = 1

    nock(constants.BASE_URL)
      .get(`/trending/all/day?api_key=${process.env.TMDB_KEY}&page=${page}`)
      .reply(200, mockedResponse)

    const res = await request.get(`/api/movies/trending/${page}`)

    expect(res.status).toBe(200)
    expect(res.body.page).toBe(page)
    expect(res.body.results.length).toBe(
      testData.moviesMockResponseData.results.length,
    )
    expect(res.body.total_pages).toBe(
      testData.moviesMockResponseData.total_pages,
    )
    expect(res.body.total_results).toBe(
      testData.moviesMockResponseData.total_results,
    )

    done()
  })

  test('GET | get list of movies by search input title from downstream API', async (done) => {
    const mockedResponse = testData.moviesMockResponseData
    const page = 1
    const title = 'title'

    nock(constants.BASE_URL)
      .get(
        `/search/movie?api_key=${process.env.TMDB_KEY}&language=en-US&query=${title}&page=${page}&include_adult=false`,
      )
      .reply(200, mockedResponse)

    const res = await request.get(`/api/movies/${title}/${page}`)

    expect(res.status).toBe(200)
    expect(res.body.page).toBe(page)
    expect(res.body.results.length).toBe(
      testData.moviesMockResponseData.results.length,
    )
    expect(res.body.total_pages).toBe(
      testData.moviesMockResponseData.total_pages,
    )
    expect(res.body.total_results).toBe(
      testData.moviesMockResponseData.total_results,
    )

    done()
  })

  test('GET | get movie details by id from downstream API', async (done) => {
    const mockedResponse = testData.movieDetailsMockResponseData
    const id = 1

    nock(constants.BASE_URL)
      .get(`/movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`)
      .reply(200, mockedResponse)

    const res = await request.get(`/api/movies/${id}`)

    expect(res.status).toBe(200)
    expect(res.body.title).toBe(testData.movieDetailsMockResponseData.title)

    done()
  })

  test('POST | upVote movie that was already upVoted or downVoted before ( already saved to database )', async (done) => {
    const { id } = await Movie.findOne()

    const res = await request.post(`/api/movies/${id}`).send({
      id: id,
      title: 'title',
      posterPath: 'poster path',
      vote: 'up',
    })

    expect(res.status).toBe(200)
    expect(res.body.up_vote).toBe(testData.votedMovies[0].up_vote + 1)

    done()
  })

  test('POST | downVote movie that was already upVoted or downVoted before ( already saved to database )', async (done) => {
    const { id } = await Movie.findOne()

    const res = await request.post(`/api/movies/${id}`).send({
      id: id,
      title: 'title',
      posterPath: 'poster path',
      vote: 'down',
    })

    expect(res.status).toBe(200)
    expect(res.body.down_vote).toBe(testData.votedMovies[0].down_vote + 1)

    done()
  })

  test('POST | upVote movie that has not been upVoted or downVoted before ( not saved to database )', async (done) => {
    const { id, up_vote } = await Movie.findOne()

    const res = await request.post(`/api/movies/${id}`).send({
      id: id,
      vote: 'up',
    })

    expect(res.status).toBe(200)

    const updatedMovie = await Movie.findOne({ id: id })

    expect(updatedMovie.up_vote).toBe(up_vote + 1)

    done()
  })

  test('POST | downVote movie that has not been upVoted or downVoted before ( not saved to database )', async (done) => {
    const { id, down_vote } = await Movie.findOne()

    const res = await request.post(`/api/movies/${id}`).send({
      id: id,
      vote: 'down',
    })

    expect(res.status).toBe(200)

    const updatedMovie = await Movie.findOne({ id: id })

    expect(updatedMovie.down_vote).toBe(down_vote + 1)

    done()
  })
})
