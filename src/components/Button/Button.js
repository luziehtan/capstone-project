import styled from 'styled-components/macro'

export default styled.button`
  font-family: 'Courier New';
  font-size: var(--font-medium);
  text-align: center;
  text-decoration: none;
  background: ${props =>
    props.isActive ? 'var(--color-congopink)' : 'var(--color-palepink)'};
  color: var(--color-almostblack);
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &.active {
    border: 1px dashed var(--color-almostblack);
    background: var(--color-congopink);
    color: var(--color-almostblack);
  }
`
