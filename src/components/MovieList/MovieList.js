import styled from 'styled-components/macro'

import MovieCard from '../MovieCard/MovieCard'

import 'css.gg/icons/css/film.css'

export default function MovieList({
  movies,
  borderHeight,
  hidden,
  margin,
  textAlign,
  background,
  onHandleDelete,
  display,
  right,
}) {
  return (
    <>
    <MovieBorder
      textAlign={textAlign}
      margin={margin}
      hidden={hidden}
      background={background}
      borderHeight={borderHeight}
      data-text="No movies here yet, add your own collection or maybe your Netflix watch list!"
    >
      {movies
        .sort((a, b) => a.movieTitle > b.movieTitle)
        .map(movie => (
          <MovieCard
            key={movie.movieTitle}
            movieName={movie.movieTitle}
            movieFoodCategory={movie.foodCategory}
            onHandleDelete={onHandleDelete}
            display={display}
            right={right}
          />
        ))}
    </MovieBorder>
    </>
  )
}

export const MovieBorder = styled.div`
  position: relative;
  overflow-y: scroll;
  height: ${props => (props.borderHeight ? '253px' : '')};
  text-align: ${props => (props.textAlign ? 'left' : '')};
  background: ${props => (props.background ? '' : 'var(--color-background)')};
  border: 2px solid var(--color-rhythm);
  border-radius: 8px;
  margin: ${props => (props.margin ? '' : '15px')};

  &:empty:not(:focus):before {
    content: attr(data-text);
    position: absolute;
    top: 50px;
    font-family: 'Quicksand', sans-serif;
    font-size: var(--font-medium);
    text-align: center;
    background: var(--color-gray);
    border-radius: 8px;
    padding: 20px;
    margin: 30px;
  }
`
