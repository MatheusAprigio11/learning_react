import { useEffect, useState } from "react";
import axios from "axios";

const PostForm = ({ post, onSuccess }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");

  useEffect(() => {
    setTitle(post?.title || "");
    setBody(post?.body || "");
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, body, userId: 1 };

    console.log("ta intrand");
    console.log(e);
    console.log(post);

    try {
      if (post) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
          newPost
        );
        onSuccess(response.data, "update");
      } else {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          newPost
        );
        onSuccess(response.data, "add");
      }

      setTitle("");
      setBody("");
    } catch (error) {
      console.log("Erro ao enviar postagem: ", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`
      );
      onSuccess(post, "delete");

      setTitle("");
      setBody("");
    } catch (error) {
      console.log("Erro ao deletar postagem: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Digite seu titulo"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Digite o conteudo..."
        ></textarea>
      </div>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Enviar
      </button>
      {post && (
        <button type="button" onClick={handleDelete}>
          Excluir
        </button>
      )}
    </form>
  );
};

export default PostForm;
