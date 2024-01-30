import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AxiosPosts from "./components/AxiosPosts";
import FetchPosts from "./components/FetchPosts";
import PostManager from "./components/PostManager";
import PostLoader from "./components/PostLoader";
import PostViewer from "./components/PostViewer";

function App() {
  return (
    <BrowserRouter>
      {/* 1 - GET com fetch e axios  */}
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">Fetch Posts</Link>
        <Link to="/axios-posts">Axios Posts</Link>
      </div>
      {/* 2 - Continuando requisições - POST e UPDATE/put */}
      <div>
        <Link to="/posts">Gerenciar Posts</Link>
      </div>
      {/* 3 - Tratamento de erros */}
      <div>
        <Link to="/post/1">Carregar post 1</Link>
      </div>
      <div>
        <Link to="/post/999">Carregar post 999</Link>
      </div>
      {/* 4 - Custom hook com API */}
      <div>
        <Link to="/post/view/2">Carregar post 2</Link>
      </div>
      <Routes>
        {/* 1 - GET com fetch e axios  */}
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />
        {/* 2 - Continuando requisições - POST e UPDATE/put */}
        <Route path="/posts" element={<PostManager />} />
        {/* 3 - Tratamento de erros */}
        <Route path="/post/:postId" element={<PostLoader />} />
        {/* 4- Custom hook com API */}
        <Route path="/post/view/:postId" element={<PostViewer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
