import MovieList from './MovieList'
import Header from './Header'
import Button from './Button'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

export default function MovieListPage({ movies }) {
  return (
    <div>
      <Header />
      <MovieList movies={movies} />
      <ButtonWrapper>
        <AddMovieButton as={Link} to="/">
          Add new movie to your collection
        </AddMovieButton>
      </ButtonWrapper>
    </div>
  )
}

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`

const AddMovieButton = styled(Button)`
  background: #dbf4a7;
  color: #51675e;
  padding: 15px;
  text-align: center;
  font-family: Arial;
  font-size: 0.8em;
  text-decoration: none;
  border: 2px solid transparent;
  width: 100%;
`
