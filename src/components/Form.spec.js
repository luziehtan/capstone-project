import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

describe('Form', () => {
  it('renders a form with one input and a button', () => {
    render(<Form />)
    expect(screen.getByLabelText('Movie:')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies the movie title to the submit callback', () => {
    const callback = jest.fn()
    render(<Form onAddMovie={callback} />)
    userEvent.type(screen.getByLabelText('Movie:'), 'A Good Year')
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledWith('A Good Year')
  })
})
