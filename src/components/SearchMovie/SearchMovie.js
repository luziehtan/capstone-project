import styled from 'styled-components/macro'

import Input from '../Input/Input'

export default function SearchMovie({ userInput, setUserInput, text }) {

  return (
    <Form onSubmit={event => event.preventDefault()}>
        <Input
          value={userInput}
          name="searchinput"
          onChange={event => setUserInput(event.target.value)}
          placeholder={text}
        />
        <DeleteInput onClick={() => setUserInput('')}>
          X
        </DeleteInput>
    </Form>
  )
}

const Form = styled.form`
margin: 0 50px;
`

const DeleteInput = styled.div`
  position: absolute;
  top: 9px;
  right: 10px;
`