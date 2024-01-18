import './App.css'
import ComponenteFilho from './components/ComponenteFilho'
import Contador from './components/Contador'
import DIsplayWindowSize from './components/DIsplayWindowSize'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import ValorDoContexto from './components/ValorDoContexto'
import { MeuContextoProvider } from './contexts/MeuContexto'

function App() {

  return (
    <>
      {/* 8.1 - useEffect */}
      <ExemploUseEffect />
      <Timer />

      {/* 8.2 - useContext */}
      {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}

      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
      {/* 8.3 - useReducer */}
      {/* estados mais complexos */}
      <Contador />

      {/* 8.4 - Custom Hook */}
      <DIsplayWindowSize />
    </>
  )
}

export default App