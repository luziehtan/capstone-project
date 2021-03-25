import { render, screen } from '@testing-library/react'
import Header from './Header'
import imageFile from '../../images/eatnwatchlogo.png'

describe('Header', () => {
  it('renders a img and subtitle', () => {
    render(<Header image={imageFile} subtitle={'This is a subtitle'} />)
    expect(screen.getByText('This is a subtitle')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
