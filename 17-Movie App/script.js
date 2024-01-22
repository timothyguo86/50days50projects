const POPULAR_MOVIE_API_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/'
const SEARCH_API_URL = 'https://api.themoviedb.org/3/search/movie?query='
const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWRiMDE5NzMwYzAwNzU4Njg5NTVkMWVjOTQwNDBiYiIsInN1YiI6IjY1YWM4MmM1ZDEwMGI2MDBlYjJhMDc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X7ZhvNyVpe29k3w8nzToT03HPib3cQeWpF4xU7qarDc'

const form = document.querySelector('#form')
const search = document.querySelector('#search')
const main = document.querySelector('#main')

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY
  }
}

getMovies(POPULAR_MOVIE_API_URL)

form.addEventListener('submit', e => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(`${SEARCH_API_URL}${searchTerm}`)
    search.value = ''
  } else {
    window.location.reload()
  }
})

function getMovies(url) {
  fetch(url, options)
    .then(res => res.json())
    .then(data => showMovies(data.results))
    .catch(err => console.error(err)) // TODO: Using Axio? Handle the error appropriately, e.g., show an error message to the user
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}" />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(2)}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `

    main.append(movieEl)
  })
}

function getClassByRate(vote) {
  if (vote > 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}
