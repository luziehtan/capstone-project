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
  category,
}) {
  const [suggestions, setSuggestions] = useState(movieRandomizer())

  return (
    <>
      <Header subtitle={'Try one of these movies and enjoy your meal!'} />
      <ChosenCategory>Your food category: {category}</ChosenCategory>
      <MovieList
        hidden={filteredMovies.length === 0}
        borderHeight={borderHeight}
        movies={suggestions}
        display={'none'}
        right={'5px'}
      />
      <ButtonWrapper>
        <AgainButton
          hidden={filteredMovies.length <= 3}
          onClick={() => setSuggestions(movieRandomizer())}
        >
          Again!
        </AgainButton>
      </ButtonWrapper>
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
          right={'5px'}
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

const ChosenCategory = styled.p`
  font-size: var(--font-large);
  text-align: center;
  background: var(--color-rhythm-verylight);
  padding: 5px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const AgainButton = styled(Button)`
  width: 30%;
  background: var(--color-yellowgreencrayola);
`
const NoMovies = styled.div`
  font-size: var(--font-large);
  text-align: center;
  background: var(--color-gray);
  border-radius: 8px;
  padding: 25px 5px 5px 5px;
  margin: 0 15px;
`
const TextWrapper = styled.div`
  margin-bottom: 15px;
`
const AddMoreMovies = styled.div`
  font-size: var(--font-large);
  text-align: center;
  border-radius: 8px;
  padding: 25px;
  margin: 5px 15px 80px 15px;
`
const AddMoreButton = styled(Button)`
  font-size: var(--font-large);
  width: 50%;
  background: var(--color-yellowgreencrayola);
  margin-top: 20px;
`
