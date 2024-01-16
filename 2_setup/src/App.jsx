import './App.css'
import Bomdia from './components/Bomdia'
import Button from './components/Button'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import Form from './components/Form'
import LoginButton from './components/LoginButton'
import Pai from './components/Pai'
import PaiFunction from './components/PaiFunction'
import RenderCondicional from './components/RenderCondicional'
import UserInfoForm from './components/UserInfoForm'
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

      {/* 6.6 - useState -> Hook */}
      <Counter />

      {/* 6.7 - Multiplos Estados */}
      <UserInfoForm />

      {/* 6.8 - Eventos */}
      <Button />

      {/* 6.9 - Passando funções de manipulação de eventos como props */}
      <PaiFunction />

      {/* 6.10 - Eventos de form */}
      <Form />

      {/* 6.11 - Renderização condicional */}
      <RenderCondicional user="Matheus"/>

      {/* 6.12 - Expressão Ternaria */}
      <LoginButton loggedIn={false}/>
      <LoginButton loggedIn={true}/>

    </>
  )
}

export default App
