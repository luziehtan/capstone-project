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
  )
}

export const MovieBorder = styled.div`
  border: 2px solid #7d84b2;
  border-radius: 8px;
  margin: ${props => (props.margin ? '' : '15px')};
  height: ${props => (props.borderHeight ? '300px' : '')};
  overflow-y: scroll;
  position: relative;
  text-align: ${props => (props.textAlign ? 'left' : '')};
  background: ${props => (props.background ? '' : '#F8F8FF')};

  &:empty:not(:focus):before {
    content: attr(data-text);
    font-family: 'Quicksand', sans-serif;
    color: #aaa;
    background: #eee;
    border-radius: 8px;
    padding: 20px;
    position: absolute;
    text-align: center;
    top: 70px;
    margin: 30px;
  }
`
