import styled from 'styled-components/macro'

import Button from '../Button/Button'

import 'css.gg/icons/css/film.css'

export default function MovieCard({
  onHandleDelete,
  key,
  movieName,
  movieFoodCategory,
  display,
  right,
}) {
  return (
    <>
      <MovieWrapper key={key}>
        <MovieTitle>{movieName}</MovieTitle>{' '}
        <FoodCategory right={right}>{movieFoodCategory}</FoodCategory>
        <DeleteButton
          display={display}
          onClick={() => onHandleDelete(movieName)}
        >
          <ButtonIcon className="gg-trash" />
        </DeleteButton>
      </MovieWrapper>
    </>
  )
}

const MovieWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(125, 132, 178, 0.3);
  padding: 15px;
  margin: 5px;
  border-radius: 8px;
  font-family: 'Quicksand', sans-serif;
  position: relative;
`
const MovieTitle = styled.span`
  word-wrap: break-word;
  width: 170px;
`
const FoodCategory = styled.span`
  position: absolute;
  background: rgba(125, 132, 178, 0.6);
  color: #5b639a;
  border-radius: 8px;
  font-size: 0.8em;
  padding: 5px;
  right: ${props => (props.right ? '5px' : '40px')};
  margin-left: 20px;
  z-index: 1;
`
const DeleteButton = styled(Button)`
  background: transparent;
  width: 10%;
  position: relative;
  right: -10px;
  display: ${props => (props.display ? 'none' : 'block')};
`
const ButtonIcon = styled.div`
  &.gg-trash {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 12px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px, inset -2px 0 0, inset 2px 0 0;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    margin-top: 4px;
  }
  &.gg-trash::after,
  &.gg-trash::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &.gg-trash::after {
    background: currentColor;
    border-radius: 3px;
    width: 16px;
    height: 2px;
    top: -4px;
    left: -5px;
  }
  &.gg-trash::before {
    width: 10px;
    height: 4px;
    border: 2px solid;
    border-bottom: transparent;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    top: -7px;
    left: -2px;
  }
`
