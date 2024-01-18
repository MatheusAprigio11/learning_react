import { useReducer } from 'react'
//Geralmente usado quando lidamos com um objeto que tem varias propriedade, transformar dados....
//Definição do estado inicial

const estadoInicial = { contador: 0 }

//Função reducer que defina como as ações atualizam o estado
function reducer(estado, acao){

    switch(acao.tipo){
        case "incrementar":
            return{contador: estado.contador + 1}
        case "incrementar_dobrado":
            return{contador: estado.contador + 2}
        case "decrementar":
            return{contador: estado.contador - 1}
        case "resetar":
            return{contador: 0}
        default:
            throw new Error("Ação não suportada")
    }

}

const Contador = () => {

    //Inicializar o useReducer com estado inicial, preciso da função modificadora.

    const [estado, dispatch] = useReducer(reducer, estadoInicial)

  return (
    <div>
        <p>Contador: {estado.contador}</p>
        <button onClick={() => dispatch({ tipo: "incrementar" })}>+1</button>
        <button onClick={() => dispatch({ tipo: "incrementar_dobrado" })}>+2</button>
        <button onClick={() => dispatch({ tipo: "decrementar" })}>-1</button>
        <button onClick={() => dispatch({ tipo: "resetar" })}>Reset</button>

    </div>
  )
}

export default Contador