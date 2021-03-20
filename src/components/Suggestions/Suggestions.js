import { useState } from 'react'
import styled from 'styled-components/macro'

import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import Button from '../Button/Button'

export default function Suggestions({ filteredMovies, borderHeight }) {
  const [suggestions, setSuggestions] = useState(movieRandomizer())

  return (
    <>
      <Header subtitle={'Try these movies and enjoy your meal!'} />
      <ButtonWrapper>
        <AgainButton onClick={() => setSuggestions(movieRandomizer())}>
          Again!
        </AgainButton>
      </ButtonWrapper>
      <MovieList borderHeight={borderHeight} movies={suggestions} />
    </>
  )

  function movieRandomizer() {
    const randomMovies = filteredMovies.sort(() => 0.5 - Math.random())
    let suggestions = randomMovies.slice(0, 3)
    return suggestions
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const AgainButton = styled(Button)`
  font-size: 0.8em;
  background: #dbf4a7;
  width: 50%;
`
