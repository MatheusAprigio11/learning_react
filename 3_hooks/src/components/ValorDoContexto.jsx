import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ValorDoContexto = () => {

    const {mensagem} = useContext(MeuContexto)
  return (
    <div>
        <p>O Valor do contexto é {mensagem}</p>
    </div>
  )
}

export default ValorDoContexto