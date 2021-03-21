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
      <NavButton as={NavLink} to="/movies">
        <MoviesIcon className="gg-film" />
        <TextWrap>Movies</TextWrap>
      </NavButton>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  overflow-y: scroll;
  bottom: 0;
  display: flex;
  background: #f8f8ff;
  width: 100%;
  padding: 20px;
  z-index: 2;
`

const NavButton = styled(Button)`
  font-size: 0.8em;
  font-family: 'Courier New';
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
    display: block;
    box-sizing: border-box;
    width: 0;
    height: 10px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 6px solid;
    top: 2px;
  }
`
const MoviesIcon = styled.div`
  &.gg-film {
    display: inline-block;
    border: 2px solid;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
    margin-right: 15px;
  }
  &.gg-film::after {
    content: '';
    width: 2px;
    height: 2px;
    background: currentColor;
    left: 2px;
    top: 2px;
    box-shadow: 0 4px 0, 0 8px 0, 12px 0 0, 12px 4px 0, 12px 8px 0;
  }
`
const TextWrap = styled.span`
  font-size: 1.2em;
`
