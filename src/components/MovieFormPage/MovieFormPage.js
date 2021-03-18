import Form from '../Form/Form'
import Header from '../Header/Header'

export default function MovieFormPage({ onAddMovie }) {
  return (
    <>
      <Header subtitle={'Add a new movie to your collection'} />
      <Form onAddMovie={onAddMovie} showAllMovies={false} />
    </>
  )
}
