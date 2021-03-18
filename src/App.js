import React from 'react'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { toast } from 'react-hot-toast'

import MainPage from './components/MainPage/MainPage'
import MovieFormPage from './components/MovieFormPage/MovieFormPage'
import MovieListPage from './components/MovieListPage/MovieListPage'
import Suggestions from './components/Suggestions/Suggestions'

import loadFromLocalStorage from './lib/loadFromLocalStorage'
import saveToLocalStorage from './lib/saveToLocalStorage'

export default function App() {
  const [movies, setMovies] = useState(loadFromLocalStorage('movies') ?? [])
  const [category, setCategory] = useState(null)
  const filteredMovies = movies.filter(
    movie => category === 'all' || !category || movie.foodCategory === category
  )

  const { push } = useHistory()

  useEffect(() => {
    saveToLocalStorage('movies', movies)
  }, [movies])

  return (
    <Switch>
      <Route exact path="/">
        <MainPage onHandleChange={changeCategory} />
      </Route>
      <Route path="/suggestions">
        <Suggestions filteredMovies={filteredMovies} />
      </Route>
      <Route path="/addmovie">
        <Toaster />
        <MovieFormPage onAddMovie={addMovie} />
      </Route>
      <Route path="/movies">
        <MovieListPage
          filteredMovies={filteredMovies}
          onHandleChange={changeCategory}
        />
      </Route>
    </Switch>
  )

  function changeCategory(e) {
    const selectedCategory = e.target.selectedOptions[0].value
    setCategory(selectedCategory)
  }

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
      push('/addmovie')
    } else {
      setMovies([{ movieTitle: newMovie, foodCategory: newFood }, ...movies])
      push('/movies')
    }
  }
}
