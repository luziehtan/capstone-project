import React from 'react'
import MovieListPage from './MovieListPage.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'MovieListPage',
  component: MovieListPage,
}

const Template = args => <MovieListPage {...args} />

export const DefaultMovieListPage = Template.bind({})
DefaultMovieListPage.args = {
  onHandleChange: action('handleSelect'),
  filteredMovies: [{ movieTitle: 'A Good Year', foodCategory: 'French' }],
  onHandleDelete: action('handleDelete'),
  category: 'French',
}
