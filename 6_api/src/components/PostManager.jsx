import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const PostManager = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        const axiosPosts = async () => {
            try {
                
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

                setPosts(response.data.slice(0,5))
            } catch (error) {
                setError(error.message);
            }
        }

        axiosPosts()
    }, [])
  return (
    <div>
        <h2>Postagens</h2>
        {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button>Editar</button>
                </div>
            ))}
    </div>
  )
}

export default PostManager