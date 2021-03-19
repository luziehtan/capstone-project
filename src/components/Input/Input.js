import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label>
      {labelText}
      <LabelInput
        required
        name={name}
        placeholder={placeholder}
        type="text"
        pattern="^(?!\s*$).+"
        maxLength="200"
      />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 2px;
`
const LabelInput = styled.input`
  border: 1px dashed #bbb;
  border-radius: 8px;
  margin-top: 8px;
  height: 30px;
  outline: none;
  padding-left: 10px;
  font-size: 0.65em;
`
