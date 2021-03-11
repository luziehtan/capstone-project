import Form from './Form'
import Header from './Header'

export default function MovieFormPage({ onAddMovie }) {
  return (
    <div>
      <Header subtitle={'Add a new movie to your collection'} />
      <Form onAddMovie={onAddMovie} />
    </div>
  )
}
