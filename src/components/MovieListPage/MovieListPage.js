import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import Button from '../Button/Button'
import Select from '../Select/Select'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

export default function MovieListPage({
  onHandleChange,
  onFilterMovies,
  filteredMovies,
}) {
  return (
    <>
      <Header subtitle={'Your movie collection'} />
      <form onChange={onHandleChange}>
        <Select
          foodCategoryValue={onFilterMovies}
          showAllMovies="true"
          optionText={'Choose the food category'}
        />
      </form>
      <MovieList movies={filteredMovies} borderHeight={300} />
      <ButtonWrapper>
        <AddMovieButton as={Link} to="/addmovie">
          Add new movie to your collection
        </AddMovieButton>
      </ButtonWrapper>
    </>
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
