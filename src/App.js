import { React, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import MovieFormPage from './components/MovieFormPage/MovieFormPage'
import MovieListPage from './components/MovieListPage/MovieListPage'

import loadFromLocalStorage from './lib/loadFromLocalStorage'
import saveToLocalStorage from './lib/saveToLocalStorage'

export default function App() {
  const [movies, setMovies] = useState(loadFromLocalStorage('movies') ?? [])
  const { push } = useHistory()

  React.useEffect(() => {
    saveToLocalStorage('movies', movies)
  }, [movies])

  return (
    <Switch>
      <Route exact path="/">
        <MovieFormPage onAddMovie={addMovie} />
      </Route>
      <Route path="/movies">
        <MovieListPage movies={movies} />
      </Route>
    </Switch>
  )

  function addMovie(newMovie, newFood) {
    const isMovieInState = movies.some(
      movie => movie['movieTitle'] === newMovie
    )

    !isMovieInState &&
      setMovies([{ movieTitle: newMovie, foodCategory: newFood }, ...movies])
    push('/movies')
  }
}
