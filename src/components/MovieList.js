import styled from 'styled-components/macro'

export default function MovieList({ movies }) {
  return (
    <MovieBorder data-text="No movies here yet, add your own collection or maybe your Netflix watch list!">
      {movies.map(movie => (
        <MovieWrapper>"{movie}"</MovieWrapper>
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
    color: #ccc;
    background: #eee;
    border-radius: 8px;
    padding: 20px;
    position: absolute;
    text-align: center;
    top: 70px;
    margin: 30px;
  }
`
