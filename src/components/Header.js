import styled from 'styled-components/macro'
import Logo from '../images/eatnwatchlogo_new.png'

export default function Header() {
  return (
    <HeaderLogo>
      <img src={Logo} alt="eatnwatchlogo" width="179" height="70" />
    </HeaderLogo>
  )
}

const HeaderLogo = styled.section`
  text-align: center;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
`
