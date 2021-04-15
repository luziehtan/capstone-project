import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import Button from '../Button/Button'
import Select from '../Select/Select'
import SearchMovie from '../SearchMovie/SearchMovie'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

export default function MovieListPage({
  onHandleChange,
  filteredMovies,
  onHandleDelete,
  category,
  userInput,
  setUserInput,
  text
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
      <SearchWrapper>
      <SearchMovie
      userInput={userInput}
      setUserInput={setUserInput}
      text={'Search for movie'}/>
      </SearchWrapper>
      <MovieList
        movies={filteredMovies}
        borderHeight={300}
        onHandleDelete={onHandleDelete}
      />
      <ButtonWrapper>
        <AddMovieButton data-testid="addmoviebutton" as={Link} to="/addmovie">
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

const SearchWrapper = styled.div`
text-align: center;
margin: 0 15px;
`

const AddMovieButton = styled(Button)`
  font-size: var(--font-medium);
  background: var(--color-yellowgreencrayola);
  border: 2px solid transparent;
`

const CategorySelect = styled.form`
  margin: 130px 15px 15px 15px;
`