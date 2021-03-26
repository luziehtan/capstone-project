import styled from 'styled-components/macro'

import Button from '../Button/Button'

import 'css.gg/icons/css/film.css'

export default function MovieCard({
  onHandleDelete,
  movieName,
  movieFoodCategory,
  display,
  right,
}) {
  return (
    <MovieWrapper>
      <MovieTitle>{movieName}</MovieTitle>{' '}
      <FoodCategory right={right}>{movieFoodCategory}</FoodCategory>
      <DeleteButton display={display} onClick={() => onHandleDelete(movieName)}>
        <ButtonIcon className="gg-trash" />
      </DeleteButton>
    </MovieWrapper>
  )
}

const MovieWrapper = styled.section`
  position: relative;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-rhythm-verylight);
  border-radius: 8px;
  padding: 15px;
  margin: 5px;
`
const MovieTitle = styled.span`
  word-wrap: break-word;
  width: 170px;
`
const FoodCategory = styled.span`
  position: absolute;
  right: ${props => (props.right ? '5px' : '40px')};
  font-size: var(--font-medium);
  background: var(--color-rhythm-light);
  color: var(--color-darkbluegray);
  border-radius: 8px;
  padding: 5px;
  margin-left: 20px;
  z-index: 1;
`
const DeleteButton = styled(Button)`
  position: relative;
  right: -10px;
  display: ${props => (props.display ? 'none' : 'block')};
  width: 10%;
  background: transparent;
`
const ButtonIcon = styled.div`
  &.gg-trash {
    box-sizing: border-box;
    position: absolute;
    right: 10px;
    bottom: 2px;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 12px;
    border: 2px solid transparent;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    box-shadow: 0 0 0 2px, inset -2px 0 0, inset 2px 0 0;
    margin-top: 4px;
  }
  &.gg-trash::after,
  &.gg-trash::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    display: block;
  }
  &.gg-trash::after {
    top: -4px;
    left: -5px;
    width: 16px;
    height: 2px;
    background: currentColor;
    border-radius: 3px;
  }
  &.gg-trash::before {
    top: -7px;
    left: -2px;
    width: 10px;
    height: 4px;
    border: 2px solid;
    border-bottom: transparent;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
`
