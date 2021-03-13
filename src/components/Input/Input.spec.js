import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders a label text and an input', () => {
    render(
      <Input labelText="Movie" placeholder="Enter new movie" name="movie" />
    )
    const input = screen.getByLabelText('Movie')
    expect(input).toHaveAttribute('placeholder', 'Enter new movie')
    expect(input).toHaveAttribute('name', 'movie')
  })
})
