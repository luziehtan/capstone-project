import React from 'react'
import MovieListPage from './MovieListPage.js'

export default {
  title: 'MovieListPage',
  component: MovieListPage,
}

const Template = () => (
  <MovieListPage
    movies={[{ movieTitle: 'A Good Year', foodCategory: 'French' }]}
  />
)

export const DefaultMovieListPage = Template.bind({})
