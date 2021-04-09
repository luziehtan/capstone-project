import {useState, useEffect} from 'react'

import styled from 'styled-components/macro'

import Button from '../Button/Button'

import 'css.gg/icons/css/film.css'
import 'css.gg/icons/css/play-button-r.css'

export default function MovieCard({
  onHandleDelete,
  movieName,
  movieFoodCategory,
  display,
  right,
})

{

  const {REACT_APP_TMDB_API_KEY} = process.env
  const MOVIE_API = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_API_KEY}&query=${movieName}`
  const [overview, setOverview] = useState('')
  const [image, setImage] = useState('')

  const IMG_API = 'https://image.tmdb.org/t/p/w92'

  const [isTextVisible, setIsTextVisible] = useState(false)

  useEffect(() => {
    fetch(MOVIE_API)
      .then(res => res.json())
      .then(data => {
        setOverview([data.results[0].overview])
        setImage([data.results[0].poster_path])
      })
      .catch(error => {
        throw error
      })
  }, [MOVIE_API])


  return (
    <>
    <MovieWrapper>
      <DetailsButton
      data-testide="detailsbutton"
      onClick={() => setIsTextVisible(!isTextVisible)}>
        <DetailsIcon className="gg-comment" />
      </DetailsButton>
      <MovieTitle>{movieName}</MovieTitle>{' '}
      <FoodCategory right={right}>{movieFoodCategory}</FoodCategory>
      <DeleteButton
        data-testid="deletebutton"
        display={display}
        onClick={() => onHandleDelete(movieName)}
      >
        <ButtonIcon className="gg-trash" />
      </DeleteButton>
    </MovieWrapper>
    <DetailsWrapper hidden={!isTextVisible}>
    <DetailsText>
    <Poster src={`${IMG_API}${image}`} alt="" />
    {overview}
    </DetailsText>
    </DetailsWrapper>
    </>
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
  position: absolute;
  left: 35px;
  word-wrap: break-word;
  width: 165px;
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
const DetailsButton = styled(Button)`
  position: relative;
  left: -20px;
  bottom: 10px;
  background: transparent;
  width: 10%;
  `
const ButtonIcon = styled.div`
  &.gg-trash {
    box-sizing: border-box;
    position: absolute;
    right: 10px;
    bottom: 4px;
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
const DetailsIcon = styled.div`
color: var(--color-rhythm);
&.gg-comment {
  box-sizing: border-box;
  position: absolute;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
&.gg-comment::after,
&.gg-comment::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 8px
}
&.gg-comment::after {
  height: 2px;
  background: currentColor;
  box-shadow: 0 4px 0 0;
  left: 4px;
  top: 5px
}
`
const DetailsWrapper = styled.div`

`
const Poster = styled.img`
border-radius: 8px;
float: left;
margin-right: 18px;

`
const DetailsText = styled.p`
display: inline-block;
box-sizing: border-box;
font-size: var(--font-large);
border-radius: 8px;
padding: 15px;
margin: 5px;
background: var(--color-rhythm-extremelight);
height: auto;
text-align: justify;
`
