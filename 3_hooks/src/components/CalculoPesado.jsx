import { useState, useMemo } from 'react'

const CalculoPesado = ({numero}) => {

    const resultadoCalculoPesado = useMemo(() => {
        return operacaoPesada(numero);
    }, [numero]) //useMemo só faz o calculo ser RECOMPUTADO após identificar que algumas das dependências foi alterada, fazendo com que há ganho de eficiência do projeto

    return (
        <div>
            Resultado: {resultadoCalculoPesado}
        </div>
    )
}

const operacaoPesada = (num) => {
    console.log("Realizando operacao pesada")
    return num * 1000;
}

export default CalculoPesado