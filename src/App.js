import React from 'react'
import { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { toast } from 'react-hot-toast'

import useLocalStorage from './hooks/useLocalStorage'

import MainPage from './components/MainPage/MainPage'
import MovieFormPage from './components/MovieFormPage/MovieFormPage'
import MovieListPage from './components/MovieListPage/MovieListPage'
import Suggestions from './components/Suggestions/Suggestions'
import Navigation from './components/Navigation/Navigation'

export default function App() {
  const [movies, setMovies] = useLocalStorage('movies', [])

  const [category, setCategory] = useState(null)
  const filteredMovies = movies.filter(
    movie => category === 'all' || !category || movie.foodCategory === category
  )

  const { push } = useHistory()

  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage onHandleChange={changeCategory} />
        </Route>
        <Route path="/suggestions">
          <Suggestions filteredMovies={filteredMovies} movies={movies} />
        </Route>
        <Route path="/addmovie">
          <Toaster />
          <MovieFormPage onAddMovie={addMovie} />
        </Route>
        <Route path="/movies">
          <Toaster />
          <MovieListPage
            filteredMovies={filteredMovies}
            onHandleChange={changeCategory}
            onHandleDelete={handleDelete}
          />
        </Route>
      </Switch>
      <Navigation />
    </>
  )

  function changeCategory(e) {
    const selectedCategory = e.target.selectedOptions[0].value
    setCategory(selectedCategory)
  }

  function addMovie(newMovie, newFood) {
    const isMovieInState = movies.some(
      movie => movie['movieTitle'] === newMovie
    )
    setCategory('all')

    if (!isMovieInState === false) {
      toast.error('This movie is already in your list!', {
        style: {
          reverseOrder: false,
          position: 'top-center',
          border: '1px solid black',
          marginTop: '130px',
          fontFamily: 'Arial',
        },
      })
      push('/addmovie')
    } else {
      setMovies([{ movieTitle: newMovie, foodCategory: newFood }, ...movies])
      push('/movies')
      toast.success('Movie added to your list!', {
        style: {
          reverseOrder: false,
          position: 'top-center',
          border: '1px solid black',
          marginTop: '325px',
          fontFamily: 'Arial',
        },
      })
    }
  }

  // function handleDelete(currentKey) {
  //  const newMovieList = movies.filter(movie => movie.key !== currentKey)
  //  setMovies(newMovieList)
  // }

  function handleDelete(index) {
    setMovies([...movies.slice(0, index), ...movies.slice(index + 1)])
  }
}
