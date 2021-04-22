import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import Button from '../Button/Button'
import Select from '../Select/Select'
import styled from 'styled-components/macro'

import { useState } from 'react'

import { Link } from 'react-router-dom'

export default function MovieListPage({
  onHandleChange,
  filteredMovies,
  onHandleDelete,
  category,
}) {

  const [userInput, setUserInput] = useState('')

  return (
    <>
      <Header subtitle={'Your movie collection'} />
      <CategorySelect onChange={onHandleChange}>
        <Select
          showAllMovies="true"
          optionText={category ?? 'Choose the food category'}
        />
      </CategorySelect>
      <SearchInput
        value={userInput}
        name="searchinput"
        onChange={event => setUserInput(event.target.value)}
        placeholder="Search for movie"
      />
      <DeleteInput onClick={() => setUserInput('')}>
          X
      </DeleteInput>
      <MovieList
        userInput={userInput}
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

const AddMovieButton = styled(Button)`
  font-size: var(--font-medium);
  background: var(--color-yellowgreencrayola);
  border: 2px solid transparent;
`

const CategorySelect = styled.form`
  margin: 130px 15px 15px 15px;
`

const SearchInput = styled.input`
  position: relative;
  font-size: var(--font-small);
  height: 33px;
  width: 150px;
  outline: none;
  border: 1px dashed var(--color-darkgray);
  border-radius: 8px;
  padding-left: 10px;
  margin-left: 15px;
`
const DeleteInput = styled.div`
  font-size: 13px;
  position: absolute;
  top: 195px;
  left: 148px;
  cursor: pointer;
`