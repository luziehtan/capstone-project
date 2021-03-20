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
        <TextWrap1>Play</TextWrap1>
      </NavButton>
      <NavButton as={NavLink} to="/movies">
        <MoviesIcon className="gg-film" />
        <TextWrap2>Movies</TextWrap2>
      </NavButton>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  overflow-y: scroll;
  bottom: 0;
  display: flex;
  gap: 10px;
  background: #f8f8ff;
  width: 100%;
  padding: 20px;
`

const NavButton = styled(Button)`
  font-size: 0.8em;
  font-family: 'Courier New';
  position: relative;
`
const HomeIcon = styled.div`
  &.gg-play-button-r {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
    border: 2px solid;
    border-radius: 4px;
    left: -60px;
    bottom: -3px;
  }
  &.gg-play-button-r::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 10px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 6px solid;
    top: 2px;
    left: 7px;
  }
`
const MoviesIcon = styled.div`
  &.gg-film {
    display: inline-block;
    border: 2px solid;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
    bottom: -3px;
    left: -60px;
  }
  &.gg-film::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: currentColor;
    left: 2px;
    top: 2px;
    box-shadow: 0 4px 0, 0 8px 0, 12px 0 0, 12px 4px 0, 12px 8px 0;
  }
`
const TextWrap1 = styled.span`
  font-size: 1.2em;
  position: absolute;
  display: inline;
  left: 60px;
  bottom: 12px;
`
const TextWrap2 = styled.span`
  font-size: 1.2em;
  position: absolute;
  display: inline;
  left: 52px;
  bottom: 12px;
`
