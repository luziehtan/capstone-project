import { useState } from 'react'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import Button from '../Button/Button'

export default function Suggestions({
  filteredMovies,
  borderHeight,
  movies,
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
        display={'none'}
        right={'5px'}
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
          display={'none'}
          right={'5x'}
        />
      </NoMovies>
      <AddMoreMovies hidden={filteredMovies.length > 3}>
        What about adding new movies to this category for next time?
        <br />
        <br />
        <AddMoreButton as={Link} to="/addmovie">
          Add more movies!
        </AddMoreButton>
      </AddMoreMovies>
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
  font-size: 0.9em;
  background: #eee;
  padding: 25px 5px 5px 5px;
  margin: 15px;
  border-radius: 8px;
`
const TextWrapper = styled.div`
  margin-bottom: 15px;
`
const AddMoreMovies = styled.div`
  border-radius: 8px;
  padding: 25px;
  margin: 15px;
  text-align: center;
  font-size: 0.9em;
  margin-bottom: 110px;
`
const AddMoreButton = styled(Button)`
  font-size: 0.9em;
  background: rgba(125, 132, 178, 0.6);
  width: 50%;
  margin-top: 20px;
`
