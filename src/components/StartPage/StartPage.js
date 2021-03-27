import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

import Logo from '../../images/eatnwatchlogo.png'
import LoadingGif from '../../images/eatnwatch_loading.gif'
import LoadingImg from '../../images/eatnwatchloadstop3.png'
import Button from '../Button/Button'

export default function StartPage() {
  return (
    <StartingPage>
      <img src={Logo} alt="eatnwatchlogo" width="" height="80" />
      <img src={LoadingGif} alt="eatnwatchloading" width="" height="80px" />
      <LoadStop
        src={LoadingImg}
        alt="eatnwatchloadstop"
        width=""
        height="112px"
      />
      <StartButton as={Link} to="/play">
        Let's Play!
      </StartButton>
    </StartingPage>
  )
}

const StartingPage = styled.div`
  position: fixed;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 15px;
  top: 25%;
  left: 0;
  right: 0;
`
const StartButton = styled(Button)`
  margin-top: 30px;
  animation: cssAnimation 0s 2.7s forwards;
  visibility: hidden;
  border: 1px dashed var(--color-congopink);

  @keyframes cssAnimation {
    to {
      visibility: visible;
    }
  }
`
const LoadStop = styled.img`
  position: fixed;
  top: 250px;
  animation: cssAnimation 0s 2.7s forwards;
  visibility: hidden;

  @keyframes cssAnimation {
    to {
      visibility: visible;
    }
  }
`
