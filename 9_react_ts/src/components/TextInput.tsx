import {useState} from 'react'

const TextInput = () => {

  const [text, setText] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleChange} />
        <p>{text}</p>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default TextInput