import MovieList from './MovieList'

export default {
  title: 'MovieList',
  component: MovieList,
}

const Template = () => (
  <MovieList movies={[{ movieTitle: 'A Good Year', foodCategory: 'French' }]} />
)

export const DefaultMovieList = Template.bind({})
