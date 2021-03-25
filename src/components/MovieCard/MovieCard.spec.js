import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MovieCard from './MovieCard'

describe('MovieCard', () => {
  it('renders a movie card with a movie name and a food category', () => {
    render(<MovieCard movieName="A Good Year" movieFoodCategory="French" />)
    expect(screen.getByText('A Good Year')).toBeInTheDocument()
    expect(screen.getByText('French')).toBeInTheDocument()
  })

  it('Button calls Callback onClick when clicked', () => {
    const callback = jest.fn()
    render(
      <MovieCard
        movieName="A Good Year"
        movieFoodCategory="French"
        onHandleDelete={callback}
      />
    )
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
