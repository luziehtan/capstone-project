import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

describe('Form', () => {
  it('renders a form with two inputs and a button', () => {
    render(<Form />)
    expect(screen.getByLabelText('Movie:')).toBeInTheDocument()
    expect(screen.getByLabelText('Food Category:')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders two required input fields', () => {
    render(<Form />)
    expect(screen.getByLabelText('Movie:')).toBeRequired()
    expect(screen.getByLabelText('Food Category:')).toBeRequired()
  })
})
