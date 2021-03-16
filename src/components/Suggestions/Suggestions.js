import { useState } from 'react'

import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import Button from '../Button/Button'

export default function Suggestions({ filteredMovies, borderHeight }) {
  const [suggestions, setSuggestions] = useState(movieRandomizer())

  return (
    <div>
      <Header subtitle={'Try these movies and enjoy your meal!'} />
      <MovieList borderHeight={borderHeight} movies={suggestions} />
      <Button onClick={() => setSuggestions(movieRandomizer())}>Again!</Button>
    </div>
  )

  function movieRandomizer() {
    const randomMovies = filteredMovies.sort(() => 0.5 - Math.random())
    let suggestions = randomMovies.slice(0, 3)
    return suggestions
  }
}
