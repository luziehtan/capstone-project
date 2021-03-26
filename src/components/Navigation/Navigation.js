import { NavLink } from 'react-router-dom'

import 'css.gg/icons/css/play-button-r.css'
import 'css.gg/icons/css/film.css'

import Button from '../Button/Button'
import styled from 'styled-components/macro'

export default function Navigation() {
  return (
    <Nav>
      <NavButton as={NavLink} exact to="/">
        <HomeIcon className="gg-play-button-r" />
        <TextWrap>Play</TextWrap>
      </NavButton>
      <NavButton as={NavLink} to="/movies" data-testid="movies">
        <MoviesIcon className="gg-film" />
        <TextWrap>Movies</TextWrap>
      </NavButton>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  overflow-y: scroll;
  background: var(--color-background);
  padding: 20px;
  z-index: 2;
`

const NavButton = styled(Button)`
  display: flex;
  margin: 0 10px;
`
const HomeIcon = styled.div`
  &.gg-play-button-r {
    box-sizing: border-box;
    display: inline-block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
    border: 2px solid;
    border-radius: 4px;
    margin-right: 20px;
  }
  &.gg-play-button-r::before {
    content: '';
    box-sizing: border-box;
    display: block;
    top: 2px;
    width: 0;
    height: 10px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 6px solid;
  }
`
const MoviesIcon = styled.div`
  &.gg-film {
    display: inline-block;
    width: 22px;
    height: 18px;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    margin-right: 15px;
  }
  &.gg-film::after {
    content: '';
    left: 2px;
    top: 2px;
    width: 2px;
    height: 2px;
    background: currentColor;
    box-shadow: 0 4px 0, 0 8px 0, 12px 0 0, 12px 4px 0, 12px 8px 0;
  }
`
const TextWrap = styled.span`
  font-size: var(--font-xxlarge);
`
