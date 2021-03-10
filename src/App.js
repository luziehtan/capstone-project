import React from 'react'
import Form from './components/Form'
import MovieList from './components/MovieList'
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
      <Form onAddMovie={addMovie}></Form>
      <MovieList movies={movies} />
    </div>
  )

  function addMovie(newMovie, newFood) {
    setMovies([{ movieTitle: newMovie, foodCategory: newFood }, ...movies])
  }
}
