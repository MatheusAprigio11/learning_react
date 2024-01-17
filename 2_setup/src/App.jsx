import './App.css'
import Bomdia from './components/Bomdia'
import BotaoAzul from './components/BotaoAzul'
import BotaoEstilizado from './components/BotaoEstilizado'
import Button from './components/Button'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import CounterEx from './components/CounterEx'
import Descricao from './components/Descricao'
import Form from './components/Form'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import NumberList from './components/NumberList'
import Pai from './components/Pai'
import PaiFunction from './components/PaiFunction'
import RenderCondicional from './components/RenderCondicional'
import TaskList from './components/TaskList'
import UserInfoForm from './components/UserInfoForm'
import Warning from './components/Warning'
import Welcome from './components/Welcome'


function App() {
  
  const tasks = [
    { id: 1, text: "Comprar Cadeira" },
    { id: 2, text: "Estudar ReactTS" },
];

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

      {/* 6.13 - Render Nulo */}
      <Warning warning="Este componente não está nulo!" />

      {/* 6.14 - Listas Chaves */} 
      <NumberList numbers={[1, 2, 3, 4, 5, 6, 7]}/>

      {/* 6.15 - Estilos por atributo */}
      <BotaoEstilizado />

      {/* 6.16 - Estilos Globais */}
      <BotaoAzul />

      {/* 6.17 - Exercicios */}
      <Greeting name="João"/>
      <CounterEx />
      <TaskList tasks={tasks} />

    </>
  )
}

export default App
