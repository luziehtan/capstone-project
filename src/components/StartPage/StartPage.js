import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

import Logo from '../../images/eatnwatchlogo.png'
import LoadingGif from '../../images/eatnwatch_loading.gif'
import Button from '../Button/Button'

export default function StartPage() {
  return (
    <StartingPage>
      <img src={Logo} alt="eatnwatchlogo" width="" height="80" />
      <img src={LoadingGif} alt="eatnwatchloading" width="" height="80px" />
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
  margin-top: 10px;
`
