import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ComponenteFilho = () => {
    const { mensagem, setMensagem } = useContext(MeuContexto)

    return (
    <div>
        <p>{mensagem}</p>
        <button onClick={() => setMensagem("Nova Mensagem")}>Alterar Mensagem</button>
    </div>
  )
}

export default ComponenteFilho