import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navigation from './Navigation'
import { MemoryRouter } from 'react-router-dom'

const pages = [
  {
    title: 'Play',
    subtitle: 'Which movie should you watch now?',
    path: '/',
  },
  {
    title: 'Movies',
    subtitle: 'Your movie collection',
    path: 'movies',
  },
]
describe('Navigation', () => {
  it('renders a navigation component with buttons, including subtitles from pages const', () => {
    render(<Navigation pages={pages} />, { wrapper: MemoryRouter })
    expect(screen.getByRole('link', { name: 'Play' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Movies' })).toBeInTheDocument()
  })
})
