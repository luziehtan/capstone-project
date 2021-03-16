import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'

export default function Suggestions({ filteredMovies, borderHeight }) {
  const randomMovies = filteredMovies.sort(() => 0.5 - Math.random())
  let suggestions = randomMovies.slice(0, 3)

  return (
    <div>
      <Header subtitle={'Try these movies and enjoy your meal!'} />
      <MovieList borderHeight={borderHeight} movies={suggestions} />
    </div>
  )
}
