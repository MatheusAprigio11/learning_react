import { useParams } from "react-router-dom";
import useHttp from "../hooks/useHttp";

const PostViewer = () => {
  const { postId } = useParams();

  const {
    data: post,
    error,
    loading,
  } = useHttp(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    "GET",
    null,
    [postId]
  );
  return (
    <div>
      <h1>Post: {postId}</h1>
      {loading && <p>Carregando</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostViewer;
