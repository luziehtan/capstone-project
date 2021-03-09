import React from 'react'
import Form from './components/Form'
import MovieList from './components/MovieList'
import loadFromLocalStorage from './lib/loadFromLocalStorage'
import saveToLocalStorage from './lib/saveToLocalStorage'

export default function App() {
  const [movieTitle, setMovieTitle] = React.useState(
    loadFromLocalStorage('movies') ?? []
  )

  React.useEffect(() => {
    saveToLocalStorage('movies', movieTitle)
  }, [movieTitle])

  return (
    <div>
      <Form onAddMovie={addMovie}></Form>
      <MovieList movieTitle={movieTitle} />
    </div>
  )

  function addMovie(newMovie) {
    setMovieTitle([newMovie, ...movieTitle].sort())
  }
}
