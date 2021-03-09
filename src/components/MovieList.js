import styled from 'styled-components/macro'

export default function MovieList({ movieTitle }) {
  return (
    <MovieBorder>
      {movieTitle.map(movie => (
        <MovieWrapper>{movie}</MovieWrapper>
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
  margin: 5px;
  height: 300px;
  overflow-y: scroll;
`
