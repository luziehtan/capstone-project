import styled from 'styled-components/macro'

export default styled.button`
  background-color: black;
  padding: 10px;
  text-decoration: none;
  color: black;
  text-align: center;
  border: none;
  border-radius: 8px;
  background: ${props => (props.isActive ? '#fb9488' : '#fed9d5')};
  width: 100%;
  cursor: pointer;
  font-family: 'Courier New';

  &.active {
    border: 1px dashed #333;
    background: #fb9488;
    color: #333;
  }
`
