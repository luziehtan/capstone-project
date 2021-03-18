import styled from 'styled-components/macro'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import 'css.gg/icons/css/play-button-r.css'
import 'css.gg/icons/css/bot.css'

import Header from '../Header/Header'
import Select from '../Select/Select'
import Button from '../Button/Button'

export default function MainPage({ onFilterMovies, onHandleChange }) {
  const [isTextVisible, setIsTextVisible] = useState(false)

  return (
    <>
      <Header subtitle={'Which movie should you watch now?'} />
      <FoodSelectWrapper>
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
      </FoodSelectWrapper>
      <ButtonText>I'm hungry and need some help, please!</ButtonText>
      <ShowTextButton
        title={isTextVisible ? 'Hide Details' : 'Show Details'}
        onClick={() => setIsTextVisible(!isTextVisible)}
      >
        <BotIcon className="gg-bot" />
      </ShowTextButton>
      <Text hidden={!isTextVisible}>
        <strong>Hi Hungry - I'm eat'n'watch!</strong>
        <br />
        <br />
        I'm here to help you choose the perfect movie to accompany whatever food
        you have in front of you!
        <br />
        Choose a food category from the list above and I'll show you some movies
        that will match your plate!
      </Text>
    </>
  )
}

const FoodSelectWrapper = styled.div`
  position: relative;
  text-align: center;
`
const FoodSelectForm = styled.form`
  position: absolute;
  left: 35px;
  width: 80%;
`
const PlayButton = styled(Button)`
  background: transparent;
`
const ShowTextButton = styled(Button)`
  position: relative;
  top: 180px;
  left: 22px;
  background: #d5f9de;
  border: 1px dashed black;
  height: 30px;
  width: 30px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`
const ButtonText = styled.span`
  position: absolute;
  top: 333px;
  left: 70px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.6em;
`
const Text = styled.div`
  position: absolute;
  top: 330px;
  left: 0;
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  font-size: 0.9em;
  background: #d5f9de;
  padding: 20px;
  margin: 0 40px;
  border: 2px solid #8aa399;
  border-radius: 8px;
`
const BotIcon = styled.div`
  &.gg-bot {
    box-sizing: border-box;
    position: absolute;
    left: 4px;
    bottom: 9px;
    display: block;
    transform: scale(var(--ggs, 0.8));
    width: 21px;
    height: 10px;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    border-bottom: 1px solid transparent;
    border-radius: 12px;
    box-shadow: 0 0 0 2px, -4px 0 0 -1px, 4px 0 0 -1px, inset 0 -4px 0 -2px;
  }
  &.gg-bot::after,
  .gg-bot::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 2px;
    box-shadow: 0 0 0 2px;
    top: 3px;
  }
  &.gg-bot::before {
    left: -4px;
    border-radius: 3px;
  }
  &.gg-bot::after {
    border-radius: 100px;
    right: -4px;
  }
`
const PlayIcon = styled.div`
  &.gg-play-button-r {
    box-sizing: border-box;
    position: relative;
    bottom: -30px;
    display: block;
    transform: scale(var(--ggs, 4));
    width: 22px;
    height: 22px;
    border: 1px solid #dbf4a7;
    border-radius: 4px;
  }
  &.gg-play-button-r::after {
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
    top: 5px;
    left: 8px;
  }
  &.gg-play-button-r::before {
    box-sizing: border-box;
    display: block;
    transform: scale(var(--ggs, 0.9));
    width: 20px;
    height: 20px;
    border: 1px solid #8fa6cb;
    border-radius: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
`
