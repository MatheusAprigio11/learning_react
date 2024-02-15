import "./App.css";
import BarraFerramentas from "./components/BarraFerramentas";
import Contador from "./components/Contador";
import ContadorIntervalo from "./components/ContadorIntervalo";
import Counter from "./components/Counter";
import Ex03 from "./components/Ex03";
import ExibirPostagens from "./components/ExibirPostagens";
import FormularioLogin from "./components/FormularioLogin";
import Greeting from "./components/Greeting";
import ListaDeCompras from "./components/ListaDeCompras";
import TextInput from "./components/TextInput";
import { TemaProvider } from "./context/TemaContext";

function App() {

	return (
		<>
			<h1>React com TS</h1>
      {/* Componente funcional com TS */}
      <Greeting name={"João"}/>
      {/* 2- Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput />
      {/* 4- Custom hooks com TS */}
      <ContadorIntervalo />
      {/* 5 - Exercicios */}
      <FormularioLogin />
      <ListaDeCompras/>
      <Ex03 />
      {/* 6 - useReducer com TS */}
      <Contador />
      {/* 7 - Context API com TS */}
      <TemaProvider>
        <BarraFerramentas />
      </TemaProvider>

      {/* 8 - Requisição de APIs com Axios e TS */}
      <ExibirPostagens />
		</>
	);
}

export default App;
