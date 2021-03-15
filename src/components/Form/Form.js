import Input from '../Input/Input.js'
import Select from '../Select/Select.js'
import Button from '../Button/Button.js'

import styled from 'styled-components/macro'

export default function Form({ onAddMovie, foodCategoryValue }) {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        name="movieTitle"
        labelText="Movie:"
        placeholder=" Enter a new movie, e.g. 'Memoirs of a Geisha'"
      />
      <Select
        returnValue="true"
        foodCategoryValue={foodCategoryValue}
        name="foodCategory"
        labelText="Food Category:"
        optionText={'Choose a matching food category, e.g. Sushi'}
      />
      <AddMovieButton>Add movie</AddMovieButton>
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
  display: grid;
  gap: 10px;
  border: 2px solid #8aa399;
  background: rgba(138, 163, 153, 0.3);
  padding: 15px;
  border-radius: 8px;
  font-family: Arial;
`

const AddMovieButton = styled(Button)`
  background: #dbf4a7;
  color: black;
  border: 2px solid transparent;
  font-size: 0.8em;
  font-family: inherit;
`
