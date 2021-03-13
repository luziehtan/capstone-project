import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import Button from '../Button/Button'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

export default function MovieListPage({ movies }) {
  return (
    <div>
      <Header subtitle={'Your movie collection'} />
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
  margin-top: 35px;
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
