
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AxiosPosts from './components/AxiosPosts'
import FetchPosts from './components/FetchPosts'
import PostManager from './components/PostManager'

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
        <Link to="/posts">Gerencias Posts</Link>
      </div>
    <Routes>
      {/* 1 - GET com fetch e axios  */}
      <Route path="/fetch-posts" element={<FetchPosts />}/>
      <Route path="/axios-posts" element={<AxiosPosts />}/>
      {/* 2 - Continuando requisições - POST e UPDATE/put */}
      <Route path="/posts" element={<PostManager />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
