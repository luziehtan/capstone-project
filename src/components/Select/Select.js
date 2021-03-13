import styled from 'styled-components/macro'

export default function Select({ labelText, name }) {
  const options = [
    { label: 'African', value: 'African' },
    { label: 'American', value: 'American' },
    { label: 'Arabic', value: 'Arabic' },
    { label: 'Asian', value: 'Asian' },
    { label: 'Austrian', value: 'Austrian' },
    { label: 'Brazilian', value: 'Brazilian' },
    { label: 'Chinese', value: 'Chinese' },
    { label: 'English', value: 'English' },
    { label: 'French', value: 'French' },
    { label: 'German', value: 'German' },
    { label: 'Greek', value: 'Greek' },
    { label: 'Indian', value: 'Indian' },
    { label: 'Italian', value: 'Italian' },
    { label: 'Mexican', value: 'Mexican' },
    { label: '🍿 Popcorn -- just snacking!', value: '🍿 Popcorn' },
    { label: 'Russian', value: 'Russian' },
    { label: 'Sushi', value: 'Sushi' },
    { label: 'Swiss', value: 'Swiss' },
  ]
  return (
    <Label>
      {labelText}
      <SelectInput required name={name} defaultValue={''}>
        <option value="" disabled hidden>
          Choose a matching food category
        </option>
        {options.map(option => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectInput>
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 2px;
  margin-top: 10px;
  position: relative;

  &:after {
    content: '▾';
    font-family: Consolas;
    font-size: 1.3em;
    color: black;
    right: 20px;
    top: 32px;
    padding: 0 0 2px;
    position: absolute;
    pointer-events: none;
  }
`
const SelectInput = styled.select`
  border: 1px dashed #bbb;
  border-radius: 8px;
  margin-top: 8px;
  width: 100%;
  height: 33px;
  font-size: 0.8em;
  cursor: pointer;
  appearance: none;
  background: white;
`
