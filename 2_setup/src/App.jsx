import './App.css'
import Bomdia from './components/Bomdia'
import Cachorro from './components/Cachorro'
import Descricao from './components/Descricao'
import Pai from './components/Pai'
import Welcome from './components/Welcome'
function App() {
  
  return (
    <>
      <Welcome />
      <Bomdia />
      <Pai />
      <Descricao nome="Teteu" idade={30} />
      {/* 6.5 Desestruturação de props */}
      <Cachorro nome="Bob" raca="Vira-lata"/>
    </>
  )
}

export default App
