import Form from './Form'
import Header from './Header'

export default function MovieFormPage({ onAddMovie }) {
  return (
    <div>
      <Header />
      <Form onAddMovie={onAddMovie} />
    </div>
  )
}
