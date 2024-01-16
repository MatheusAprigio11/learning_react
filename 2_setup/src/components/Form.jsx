import React, { useState } from 'react'

const Form = () => {

    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        //manipulação de dados
        //validação
        //envio ao servidor pela API
        // loading
        //chamada da função de mensagens de erro//bem sucedido

        event.preventDefault()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Preencha o campo'/>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form