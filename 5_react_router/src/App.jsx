
import './App.css'

import { Routes, Route, Link, NavLink } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'
import TaskDetails from './components/TaskDetails'
import NotFound from './components/NotFound'

function App() {


  return (
    <>
    {/* 1 - Setup e configuração inicial */}
    <nav>
      <ul>

        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>

        {/* 2 - NavLink */}
        <li>
          <NavLink 
            className={({isActive}) => (isActive ? 'active-link' : "")} 
            to="/contact">
            Contato
          </NavLink>
        </li>

        {/* 3 - useNavigate */}
        <li>
          <Link to="/login">Login</Link>
        </li>
        {/* 4 - rotas dinamicas */}
        <div>
          <h2>Tarefas</h2>
          <Link to="/tasks/1">Tarefa 1</Link>
          <Link to="/tasks/2">Tarefa 2</Link>
          <Link to="/tasks/3">Tarefa 3</Link>
        </div>
        {/* 5 - rotas aninhadas */}
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        {/* 6 - Rota 404 */}
        <div>
          <h2>Itens</h2>
          <Link to="/itens/1">Item 1</Link>
        </div>
      </ul>
    </nav>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 3- useNavigate */}
        <Route path="/login" element={<Login />}/>
        {/* 4 - rotas dinamicas */}
        <Route path="/tasks/:taskId" element={<TaskDetails />}/>
        {/* 5 - rotas aninhadas */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* 6 - 404 */}
        <Route path="*" element={<NotFound />}/>
     </Routes>
    </>
  )
}

export default App
