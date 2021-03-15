import React from 'react'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { toast } from 'react-hot-toast'

import MovieFormPage from './components/MovieFormPage/MovieFormPage'
import MovieListPage from './components/MovieListPage/MovieListPage'

import loadFromLocalStorage from './lib/loadFromLocalStorage'
import saveToLocalStorage from './lib/saveToLocalStorage'

export default function App() {
  const [movies, setMovies] = useState(loadFromLocalStorage('movies') ?? [])
  const { push } = useHistory()

  useEffect(() => {
    saveToLocalStorage('movies', movies)
  }, [movies])

  return (
    <Switch>
      <Route exact path="/">
        <Toaster />
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

    if (!isMovieInState === false) {
      toast.error('This movie is already in your list!', {
        style: {
          reverseOrder: false,
          position: 'top-center',
          border: '1px solid black',
        },
      })
      push('/')
    } else {
      setMovies([{ movieTitle: newMovie, foodCategory: newFood }, ...movies])
      push('/movies')
    }
  }
}
