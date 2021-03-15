import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

import 'css.gg/icons/css/play-button-r.css'

import Header from '../Header/Header'
import Select from '../Select/Select'
import Button from '../Button/Button'

export default function MainPage({ onFilterMovies, onHandleChange }) {
  return (
    <div>
      <Header subtitle={'Which movie should you watch now?'} />
      <Text>
        <strong>Hello Hungry - I'm eat'n'watch!</strong>
        <br />
        <br />
        I'm here to help you choose the perfect movie to accompany whatever food
        you have in front of you!
        <br />
        Choose a food category from the list below and I'll show you some movies
        that will match your plate!
      </Text>
      <center>
        <FoodSelectForm onChange={onHandleChange} showAllMovies="false">
          <Select
            optionText={'Choose your food category'}
            foodCategoryValue={onFilterMovies}
          />
          <PlayButton as={Link} to={'/suggestions'}>
            <center>
              <PlayIcon className="gg-play-button-r" />
            </center>
          </PlayButton>
        </FoodSelectForm>
      </center>
    </div>
  )
}

const Text = styled.div`
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  font-size: 0.9em;
  background: #d5f9de;
  padding: 20px;
  margin: 0 40px;
  border: 2px solid #8aa399;
  border-radius: 8px;
`
const FoodSelectForm = styled.form`
  width: 60%;
`
const PlayButton = styled(Button)`
  background: transparent;
`
const PlayIcon = styled.div`
  &.gg-play-button-r {
    box-sizing: border-box;
    position: relative;
    bottom: -30px;
    display: block;
    transform: scale(var(--ggs, 3));
    width: 22px;
    height: 22px;
    border: 2px solid #dbf4a7;
    border-radius: 4px;
  }
  &.gg-play-button-r::before {
    content: '';
    color: #7d84b2;
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 10px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 6px solid;
    top: 4px;
    left: 7px;
  }
`
