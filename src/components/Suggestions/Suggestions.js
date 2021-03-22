import { useState } from 'react'
import styled from 'styled-components/macro'

import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import Button from '../Button/Button'

export default function Suggestions({
  filteredMovies,
  borderHeight,
  movies,
  margin,
  textAlign,
  background,
}) {
  const [suggestions, setSuggestions] = useState(movieRandomizer())

  return (
    <>
      <Header subtitle={'Try these movies and enjoy your meal!'} />
      <ButtonWrapper>
        <AgainButton
          hidden={filteredMovies.length <= 3}
          onClick={() => setSuggestions(movieRandomizer())}
        >
          Again!
        </AgainButton>
      </ButtonWrapper>
      <MovieList
        hidden={filteredMovies.length === 0}
        borderHeight={borderHeight}
        movies={suggestions}
      />
      <NoMovies hidden={filteredMovies.length >= 1}>
        {filteredMovies.length === 0 && (
          <TextWrapper>
            Sorry, you haven't added any movies to this category yet - try one
            of these:
          </TextWrapper>
        )}
        <MovieList
          margin={'0'}
          textAlign={'left'}
          background={background}
          movies={randomizeAll()}
        />
      </NoMovies>
    </>
  )

  function movieRandomizer() {
    const randomMovies = filteredMovies.sort(() => 0.5 - Math.random())
    let suggestions = randomMovies.slice(0, 3)
    return suggestions
  }

  function randomizeAll() {
    const randomAll = movies.sort(() => 0.5 - Math.random())
    let randomizedMovies = randomAll.slice(0, 3)
    return randomizedMovies
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
const NoMovies = styled.div`
  text-align: center;
  background: #eee;
  padding: 25px 5px 5px 5px;
  margin: 15px;
  border-radius: 8px;
`
const TextWrapper = styled.div`
  margin-bottom: 15px;
`
