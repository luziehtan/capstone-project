import styled from 'styled-components/macro'
import Logo from '../../images/eatnwatchlogo.png'

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
  border-radius: 8px;
  padding: 10px;
`

const Subtitle = styled.div`
  font-family: 'Exo 2', sans-serif;
  font-size: var(--font-extralarge);
  text-align: center;
  background: var(--color-wildblueyonder-light);
  border-radius: 3px;
  padding: 5px;
  margin: 0 12px;
`
