import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MovieFormPage from './components/MovieFormPage'
import MovieListPage from './components/MovieListPage'

import loadFromLocalStorage from './lib/loadFromLocalStorage'
import saveToLocalStorage from './lib/saveToLocalStorage'

export default function App() {
  const [movies, setMovies] = React.useState(
    loadFromLocalStorage('movies') ?? []
  )

  React.useEffect(() => {
    saveToLocalStorage('movies', movies)
  }, [movies])

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MovieFormPage onAddMovie={addMovie} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/movielist">
          <MovieListPage movies={movies} />
        </Route>
      </Switch>
    </div>
  )

  function addMovie(newMovie, newFood) {
    setMovies([{ movieTitle: newMovie, foodCategory: newFood }, ...movies])
  }
}
