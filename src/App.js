import React from 'react'
import { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { toast } from 'react-hot-toast'

import useLocalStorage from './hooks/useLocalStorage'

import StartPage from './components/StartPage/StartPage'
import MainPage from './components/MainPage/MainPage'
import MovieFormPage from './components/MovieFormPage/MovieFormPage'
import MovieListPage from './components/MovieListPage/MovieListPage'
import Suggestions from './components/Suggestions/Suggestions'
import Navigation from './components/Navigation/Navigation'

export default function App() {
  const [movies, setMovies] = useLocalStorage('movies', [
    { movieTitle: 'The Shawshank Redemption', foodCategory: 'American' },
    { movieTitle: 'Coco', foodCategory: 'Mexican' },
    { movieTitle: 'The Intouchables', foodCategory: 'French' },
    { movieTitle: 'Your Name.', foodCategory: 'Sushi' },
    { movieTitle: 'The Lion King', foodCategory: '🍿 Popcorn' },
  ])

  const [category, setCategory] = useState(null)
  const filteredMovies = movies.filter(
    movie => category === 'all' || !category || movie.foodCategory === category
  )

  const { push } = useHistory()

  return (
    <>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/play">
          <MainPage onHandleChange={changeCategory} />
        </Route>
        <Route path="/suggestions">
          <Suggestions
            filteredMovies={filteredMovies}
            movies={movies}
            category={category}
          />
        </Route>
        <Route path="/addmovie">
          <Toaster />
          <MovieFormPage onAddMovie={addMovie} />
        </Route>
        <Route path="/movies">
          <Toaster />
          <MovieListPage
            category={category}
            filteredMovies={filteredMovies}
            onHandleChange={changeCategory}
            onHandleDelete={handleDelete}
          />
        </Route>
      </Switch>
      <Route exact path={['/play', '/suggestions', '/addmovie', '/movies']}>
        <Navigation />
      </Route>
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
        icon: '🚨',
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
        icon: '🎬',
      })
    }
  }

  function handleDelete(movieName) {
    setMovies(movies.filter(movie => movie.movieTitle !== movieName))
    toast.success('Movie deleted from your list!', {
      style: {
        reverseOrder: false,
        position: 'top-center',
        border: '1px solid black',
        marginTop: '325px',
        fontFamily: 'Arial',
      },
      icon: '☑️',
    })
  }
}
