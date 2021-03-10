import React from 'react'
import Form from './Form.js'
import Input from './Input.js'
import Button from './Button.js'

export default {
  title: 'Form-Component',
  component: Form,
}

export const DefaultForm = () => (
  <Form>
    <Input
      name="movieTitle"
      labelText="Movie:"
      placeholder=" Enter a new movie, e.g. 'Memoirs of a Geisha'"
    />
    <Button>Add movie</Button>
  </Form>
)
