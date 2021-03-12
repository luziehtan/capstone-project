import styled from 'styled-components/macro'
import Logo from '../../images/eatnwatchlogo_new.png'

export default function Header({ subtitle }) {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <img src={Logo} alt="eatnwatchlogo" width="200" height="58" />
      </HeaderLogo>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  border-radius: 8px;
  padding: 5px;
  margin-bottom: 10px;
`

const HeaderLogo = styled.section`
  text-align: center;
  padding: 10px;
  border-radius: 8px;
`

const Subtitle = styled.div`
  text-align: center;
  font-size: 1em;
  font-family: 'Exo 2', sans-serif;
  background: #eee;
  border-radius: 8px;
  padding: 5px;
`
