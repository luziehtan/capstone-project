import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

import Logo from '../../images/eatnwatchlogo.png'
import LoadingGif from '../../images/eatnwatch_loading.gif'
import Button from '../Button/Button'

export default function StartPage() {
  return (
    <StartingPage>
      <img src={Logo} alt="eatnwatchlogo" width="" height="80" />
      <Loading src={LoadingGif} alt="eatnwatchloading" width="" height="80px" />
      <ButtonWrapper>
        <StartButton as={Link} to="/play">
          Let's Play!
        </StartButton>
      </ButtonWrapper>
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
const ButtonWrapper = styled.div`
  position: fixed;
  top: 42%;
  left: 0;
  right: 0;
  text-align: center;
`
const StartButton = styled(Button)`
  animation: cssAnimation1 0s 3s forwards;
  visibility: hidden;
  border: 1px dashed var(--color-congopink);

  @keyframes cssAnimation1 {
    to {
      visibility: visible;
    }
  }
`
const Loading = styled.img`
  animation: cssAnimation2 0s 3s forwards;
  visibility: visible;

  @keyframes cssAnimation2 {
    to {
      visibility: hidden;
    }
  }
`
