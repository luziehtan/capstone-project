import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import useToggle from '../../hooks/useToggle'

import 'css.gg/icons/css/play-button-r.css'
import 'css.gg/icons/css/bot.css'

import Header from '../Header/Header'
import Select from '../Select/Select'
import Button from '../Button/Button'

export default function MainPage({ onFilterMovies, onHandleChange }) {
  const [isVisible, toggleVisible] = useToggle(false)

  return (
    <>
      <Header subtitle={'Which movie should you watch now?'} />
      <WelcomeText>
        Hi there and welcome to "eat'n'watch"
        <br />
        What's that on your plate?
      </WelcomeText>
      <FoodSelectWrapper>
        <FoodSelectForm onChange={onHandleChange} showAllMovies="false">
          <Select
            name="mainpageselect"
            optionText={'Choose your food category'}
            foodCategoryValue={onFilterMovies}
          />
          <PlayButton as={Link} to={'/suggestions'} name="playbutton">
            <center>
              <PlayIcon className="gg-play-button-r" />
            </center>
          </PlayButton>
        </FoodSelectForm>
      </FoodSelectWrapper>
      <ButtonText>I'm hungry and need some help, please!</ButtonText>
      <ShowTextButton
        title={isVisible ? 'Hide Details' : 'Show Details'}
        onClick={toggleVisible}
      >
        <BotIcon className="gg-bot" />
      </ShowTextButton>
      <Text hidden={!isVisible}>
        <strong>Hi Hungry - I'm eat'n'watch!</strong>
        <br />
        <br />
        I'm here to help you choose the perfect movie to accompany whatever food
        you have in front of you!
        <br />
        Choose a food category from the list above and I'll show you some movies
        that will match your plate!
        <br />
        <br />
        (If you just want some random suggestions, simply hit the play button!)
      </Text>
    </>
  )
}

const WelcomeText = styled.p`
  font-size: var(--font-large);
  text-align: center;
  padding: 20px;
  margin: 0 20px;
`

const FoodSelectWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`
const FoodSelectForm = styled.form`
  background: var(--color-rhythm-extremelight);
  border: 2px solid var(--color-rhythm);
  border-radius: 8px;
  padding: 20px 20px 70px 20px;
  margin: 0 30px;
`
const PlayButton = styled(Button)`
  background: transparent;
`
const ShowTextButton = styled(Button)`
  position: fixed;
  bottom: 85px;
  left: 10px;
  height: 30px;
  width: 30px;
  background: var(--color-aeroblue);
  border: 1px dashed black;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`
const ButtonText = styled.span`
  position: absolute;
  bottom: 94px;
  left: 50px;
  font-family: 'Quicksand', sans-serif;
  font-size: var(--font-extrasmall);
`
const Text = styled.div`
  position: absolute;
  bottom: 95px;
  left: -15px;
  width: 320px;
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  font-size: var(--font-medium);
  background: var(--color-aeroblue);
  border: 1px solid var(--color-morningblue);
  border-radius: 8px;
  padding: 20px;
  margin: 0 40px;
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
    box-sizing: border-box;
    position: absolute;
    top: 3px;
    display: block;
    width: 2px;
    height: 2px;
    box-shadow: 0 0 0 2px;
  }
  &.gg-bot::before {
    left: -4px;
    border-radius: 3px;
  }
  &.gg-bot::after {
    right: -4px;
    border-radius: 100px;
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
    background: var(--color-white);
    border: 1px solid var(--color-yellowgreencrayola);
    border-radius: 4px;
  }
  &.gg-play-button-r::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 5px;
    left: 8px;
    display: block;
    width: 0;
    height: 10px;
    color: var(--color-rhythm);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 6px solid;
  }
  &.gg-play-button-r::before {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    transform: scale(var(--ggs, 0.9));
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-wildblueyonder);
    border-radius: 50px;
  }
`
