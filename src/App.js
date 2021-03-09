import React from 'react'
import Form from './components/Form.js'
import MovieList from './components/MovieList.js'

export default function App() {
  const [movieTitle, setMovieTitle] = React.useState([])

  return (
    <div className="App">
      <Form onAddMovie={addMovie}></Form>
      <MovieList movieTitle={movieTitle} />
    </div>
  )

  function addMovie(newMovie) {
    setMovieTitle([newMovie, ...movieTitle].sort())
  }
}
