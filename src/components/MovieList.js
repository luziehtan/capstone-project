import styled from 'styled-components/macro'

export default function MovieList({ movies }) {
  return (
    <MovieBorder data-text="No movies here yet, add your own collection or maybe your Netflix watch list!">
      {movies
        .sort((a, b) => a.movieTitle > b.movieTitle)
        .map(movie => (
          <MovieWrapper key={movie.movieTitle}>
            <MovieTitle>{movie.movieTitle}</MovieTitle>{' '}
            <FoodCategory>{movie.foodCategory}</FoodCategory>
          </MovieWrapper>
        ))}
    </MovieBorder>
  )
}

const MovieWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(125, 132, 178, 0.3);
  padding: 15px;
  margin: 5px;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
`
const MovieTitle = styled.span`
  word-wrap: break-word;
  width: 200px;
`
const FoodCategory = styled.span`
  position: absolute;
  background: rgba(125, 132, 178, 0.6);
  color: #5b639a;
  border-radius: 8px;
  font-size: 0.8em;
  padding: 5px;
  right: 10px;
  margin-left: 20px;
  z-index: 1;
`

const MovieBorder = styled.div`
  border: 2px solid #7d84b2;
  border-radius: 8px;
  margin: 15px;
  height: 300px;
  overflow-y: scroll;
  position: relative;

  &:empty:not(:focus):before {
    content: attr(data-text);
    font-family: Arial, Helvetica, sans-serif;
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
