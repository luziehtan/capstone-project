import Form from '../Form/Form'
import Header from '../Header/Header'

export default function MovieFormPage({ onAddMovie }) {
  return (
    <div>
      <Header subtitle={'Add a new movie to your collection'} />
      <Form onAddMovie={onAddMovie} />
    </div>
  )
}
