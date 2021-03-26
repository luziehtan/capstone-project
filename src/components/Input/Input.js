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
  gap: 5px;
`
const LabelInput = styled.input`
  font-size: var(--font-small);
  height: 33px;
  outline: none;
  border: 1px dashed var(--color-darkgray);
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 8px;
`
