import { render, screen } from '@testing-library/react'
import Select from './Select'

describe('Select', () => {
  it('renders a dropdown menu with food categories', () => {
    render(<Select />)
    expect(screen.getByRole('select')).toBeInTheDocument()
    expect(screen.getByDisplayValue('American')).toBeInTheDocument()
  })
})
