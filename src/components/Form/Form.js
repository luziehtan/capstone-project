import Input from '../Input/Input.js'
import Select from '../Select/Select.js'
import Button from '../Button/Button.js'

import styled from 'styled-components/macro'

export default function Form({ onAddMovie, foodCategoryValue }) {
  return (
    <FormWrapper onSubmit={handleSubmit} data-testid="form">
      <Input
        name="movieTitle"
        labelText="Movie:"
        placeholder="Enter a new movie, e.g. 'Memoirs of a Geisha'"
      />
      <Select
        returnValue="true"
        foodCategoryValue={foodCategoryValue}
        name="foodCategory"
        labelText="Food Category:"
        optionText={'Choose a matching food category, e.g. Sushi'}
        data-testId="select"
      />
      <ButtonWrapper>
        <AddMovieButton>Add movie</AddMovieButton>
      </ButtonWrapper>
    </FormWrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { movieTitle, foodCategory } = form.elements

    onAddMovie(
      movieTitle.value.slice(0, 1).toUpperCase() + movieTitle.value.slice(1),
      foodCategory.value
    )
    form.reset()
    movieTitle.focus()
  }
}

const FormWrapper = styled.form`
  font-family: 'Quicksand', sans-serif;
  background: var(--color-morningblue-light);
  display: grid;
  gap: 10px;
  border: 2px solid var(--color-morningblue);
  border-radius: 8px;
  padding: 15px;
  margin: 150px 15px 15px 15px;
`
const ButtonWrapper = styled.div`
  text-align: center;
`

const AddMovieButton = styled(Button)`
  width: 70%;
  background: var(--color-yellowgreencrayola);
  border: 2px solid transparent;
  margin-top: 8px;
`
