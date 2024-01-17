import { useEffect, useState } from 'react'

const ExemploUseEffect = () => {

    const [contador, setContador] = useState(0)

    // executar algo baseado em algo
    // mudança de um valor, carregamento da página

    useEffect(() => {
        document.title = `Você Clickou ${contador} vezes`;
    }) // [] -> array de dependencias -> executa apenas quando a pagina é iniciada

  return (
    <div>
        <p>Você Clickou {contador} vezes</p>
        <button onClick={() => setContador(contador + 1)}>Clique aqui!</button>
    </div>
  )
}

export default ExemploUseEffect