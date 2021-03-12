import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import MovieFormPage from './components/MovieFormPage/MovieFormPage'
import MovieListPage from './components/MovieListPage/MovieListPage'

import loadFromLocalStorage from './lib/loadFromLocalStorage'
import saveToLocalStorage from './lib/saveToLocalStorage'

export default function App() {
  const [movies, setMovies] = React.useState(
    loadFromLocalStorage('movies') ?? []
  )
  const { push } = useHistory()

  React.useEffect(() => {
    saveToLocalStorage('movies', movies)
  }, [movies])

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MovieFormPage onAddMovie={addMovie} />
        </Route>
        <Route path="/movielist">
          <MovieListPage movies={movies} />
        </Route>
      </Switch>
    </div>
  )

  function addMovie(newMovie, newFood) {
    setMovies([{ movieTitle: newMovie, foodCategory: newFood }, ...movies])
    push('/movielist')
  }
}
