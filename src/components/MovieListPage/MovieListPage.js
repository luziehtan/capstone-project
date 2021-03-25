import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import Button from '../Button/Button'
import Select from '../Select/Select'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

export default function MovieListPage({
  onHandleChange,
  filteredMovies,
  onHandleDelete,
  category,
}) {
  return (
    <>
      <Header subtitle={'Your movie collection'} />
      <CategorySelect onChange={onHandleChange}>
        <Select
          showAllMovies="true"
          optionText={category ?? 'Choose the food category'}
        />
      </CategorySelect>
      <MovieList
        movies={filteredMovies}
        borderHeight={300}
        onHandleDelete={onHandleDelete}
      />
      <ButtonWrapper className="margin">
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
  margin-bottom: 110px;
`

const AddMovieButton = styled(Button)`
  background: #dbf4a7;
  padding: 12px;
  text-align: center;
  font-size: 0.8em;
  text-decoration: none;
  border: 2px solid transparent;
  width: 100%;
`

const CategorySelect = styled.form`
  margin: 15px;
`
