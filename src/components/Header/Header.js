import styled from 'styled-components/macro'
import Logo from '../../images/eat-n-watch-logo.png'

export default function Header({ subtitle }) {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <img src={Logo} alt="eatnwatchlogo" width="" height="60" />
      </HeaderLogo>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  border-radius: 8px;
  padding: 5px;
  margin-bottom: 10px;
`

const HeaderLogo = styled.div`
  text-align: center;
  padding: 10px;
  border-radius: 8px;
`

const Subtitle = styled.div`
  text-align: center;
  font-size: 1em;
  font-family: 'Exo 2', sans-serif;
  background: #8fa6cb;
  border-radius: 8px;
  padding: 5px;
`
