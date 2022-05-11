# Movie Search Engine

[![Netlify Status](https://api.netlify.com/api/v1/badges/6c2f3a09-b500-460f-8647-122f0fcfeacc/deploy-status)](https://app.netlify.com/sites/mmoovviieess/deploys)

## https://mmoovviieess.netlify.app/

![Movie Search Engine](https://github.com/edignot/movie-ui/raw/master/moviesmockup.jpg)

## About:

:movie_camera: This is a MERN full-stack application that pulls movie data from downstream[`The Movie Database API`](https://developers.themoviedb.org/3/getting-started/introduction) API, displays trending movies, and allows users to search movies by name, up-vote, and down-vote movies.

:exclamation: This application has two separate GitHub repositories [`Front-End | UI`](https://github.com/edignot/movie-ui) and [`Back-End | Server`](https://github.com/edignot/movie-api), but readme file contains the same information and links for simplicity pusrposes.

## Completed MVP User Stories:
- [x] A user should be able to search movie by title and see all results mattching the search input.
- [x] A user should be able to click through pages if more than 20 results match search input, trending movies or voted movies.
- [x] A user should be able to see total amount of pages and total amount of found movies.
- [x] A user should be able to click on any movie and see additional info about.
- [x] A user should be able to up-vote or down-vote a movie and all movies that has any votes should be stored to the database.
- [x] A user should be able to see all movies that has any votes by clicking 'voted movies' button.
## Goals Achieved:
- [x] BE server is deployed to Heroku and FE is deployed to Netlify.
- [x] BE Express server created and connected to MongoDB.
- [x] BE API endpoints are tested.
- [x] FE unit tests added to all components and some integrations tests.
- [x] Redux reducers and action creators tested.

## Future User Stories and goals:
- [ ] A user should be able to filter movies by language, genre, release date, etc.
- [ ] A user should be able to login, only see personal voted movies and only be able to vote once for one movie. 
- [ ] A user should be able to sort movies by date.
## Future Goals:
- [ ] Implement user login and authentication.
- [ ] Implement PWA features, make app downloadable.
- [ ] Make application fully responsive, check all breaking points and fix issues.
- [ ] Add more front end integration tests and async tests, mock API calls

## FE Tech Stack:
- `Javascript | ES6`
- `React | React Hooks`
- `Redux | Redux Thunk`
- `Axios`
- `Jest | React Testing Library`
- `CSS`
- `Netlify CI`

## BE Tech Stack:
- `Node | Express`
- `MongoDB | Mongoose | MongoDB Could Atlas`
- `Node Fetch`
- `Jest | Supertest | Nock`
- `Heroku`

## File Structure:
### [`BE SERVER repo`](https://github.com/edignot/movie-api)  |  [Deployed API](https://mmoovviieess.herokuapp.com/)
  #### Server
  - [`Server Setup`](https://github.com/edignot/movie-api/blob/master/server.js)
  - [`Express App Setup`](https://github.com/edignot/movie-api/blob/master/app.js)
  - [`Routes`](https://github.com/edignot/movie-api/blob/master/api/routes/movieRouter.js)
  - [`Controllers`](https://github.com/edignot/movie-api/blob/master/api/controllers/movieController.js)
  - [`Downstream API Network Calls`](https://github.com/edignot/movie-api/blob/master/api/utility/networkCalls.js)
  #### Database
  - [`Mongoose Connection`](https://github.com/edignot/movie-api/blob/master/api/config/db.js)
  - [`Movie Model`](https://github.com/edignot/movie-api/blob/master/api/models/movieModel.js)
  #### API Tests
  - [`API Endpoint Tests`](https://github.com/edignot/movie-api/blob/master/api/tests/movieEndpoints.test.js)

### [`FE UI repo`](https://github.com/edignot/movie-ui)  |  [Deployed UI](https://mmoovviieess.netlify.app/)
  #### API Calls
  - [`API Calls to Server`](https://github.com/edignot/movie-ui/blob/master/src/api/index.js)
  #### Redux Setup
  - [`Reducers`]()
    - [`Movies Reducer`](https://github.com/edignot/movie-ui/blob/master/src/reducers/movies.js)
    - [`Session Reducer`](https://github.com/edignot/movie-ui/blob/master/src/reducers/session.js)
    - [`Database Reducer`](https://github.com/edignot/movie-ui/blob/master/src/reducers/database.js)
  - [`Action Creators`](https://github.com/edignot/movie-ui/tree/master/src/actions)
    - [`Movies Action Creator`](https://github.com/edignot/movie-ui/blob/master/src/actions/movies.js)
    - [`Session Action Creator`](https://github.com/edignot/movie-ui/blob/master/src/actions/session.js)
    - [`Database Action Creator`](https://github.com/edignot/movie-ui/blob/master/src/actions/database.js)
  - [`Action Types`](https://github.com/edignot/movie-ui/blob/master/src/utils/action-types.js)
  #### Page Components
  - [`Movies Page`](https://github.com/edignot/movie-ui/blob/master/src/pages/MoviesPage/MoviesPage.js)
  #### Container Components
  - [`Form Component`](https://github.com/edignot/movie-ui/blob/master/src/containers/Form/Form.js)
  - [`Movies Component`](https://github.com/edignot/movie-ui/blob/master/src/containers/Movies/Movies.js)
  - [`Movie Component`](https://github.com/edignot/movie-ui/blob/master/src/containers/Movie/Movie.js)
  - [`Pagination Component`](https://github.com/edignot/movie-ui/blob/master/src/containers/Pagination/Pagination.js)
  - [`Header Component`](https://github.com/edignot/movie-ui/blob/master/src/containers/Header/Header.js)
  #### UI Components
  - [`Layout Component`](https://github.com/edignot/movie-ui/blob/master/src/components/Layout/Layout.js)
  - [`Modal Component`](https://github.com/edignot/movie-ui/blob/master/src/components/Modal/Modal.js)
  - [`Loading Spinner Component`](https://github.com/edignot/movie-ui/blob/master/src/components/LoadingSpinner/LoadingSpinner.js)
  #### Redux Testing
  - [` `]() :exclamation: Working on tests right now, tests will be finished before Nov 27th
  #### React Components Testing
  - [` `]() :exclamation: Working on tests right now, tests will be finished before Nov 27th

## FE Development Instructions:
- [clone FE repo](https://github.com/edignot/movie-ui)
- run `npm i`
- run `npm start`
- open `http://localhost:3000`
### Running FE Test Files
- run `npm test` :exclamation: Working on tests right now, tests will be finished before Nov 27th

## BE Development Instructions:
- [clone BE repo](https://github.com/edignot/movie-api)
- run `npm i`
- create .env file and add your MongoDB connection string `ATLAS_URI` and `TMDB_KEY` [Get your unique TMDB key here](https://developers.themoviedb.org/3)
- run `npm start`
- open `http://localhost:5000`
### Running BE Test Files
- first make sure you have MongoDB installed locally
- run `brew services start mongodb-community`
- run `mongo`
- run `use movies` to switch to new movies database
- run `npm test`

## Contributors:
- [Edita Ignot](https://github.com/edignot)
