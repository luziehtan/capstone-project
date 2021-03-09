import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label>
      {labelText}
      <LabelInput name={name} placeholder={placeholder} type="text" />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 4px;
`
const LabelInput = styled.input`
  border: 1px dashed #bbb;
  border-radius: 8px;
  margin-top: 8px;
  width: 100%;
  height: 30px;
  font-size: 0.8em;
`
