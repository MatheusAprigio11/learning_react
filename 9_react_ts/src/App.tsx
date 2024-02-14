import "./App.css";
import ContadorIntervalo from "./components/ContadorIntervalo";
import Counter from "./components/Counter";
import FormularioLogin from "./components/FormularioLogin";
import Greeting from "./components/Greeting";
import ListaDeCompras from "./components/ListaDeCompras";
import TextInput from "./components/TextInput";

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
		</>
	);
}

export default App;
