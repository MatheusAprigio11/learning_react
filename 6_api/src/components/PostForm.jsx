import {useState} from 'react'
import axios from "axios"

const PostForm = ({onSuccess}) => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {title, body, userId: 4}

    try {
      
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost)

      onSuccess(response.data, "add")

    } catch (error) {

      console.log("Erro ao enviar postagem: ", error)
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
        type='text' 
        value={title} 
        placeholder='Digite seu titulo'
        onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder='Digite o conteudo...'>

        </textarea>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default PostForm