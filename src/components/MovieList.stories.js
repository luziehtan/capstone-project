import React from 'react'
import MovieList from './MovieList.js'

export default {
  title: 'MovieList-Component',
  component: MovieList,
}

export const DefaultMovieList = () => <MovieList movies={['A Good Year']} />
