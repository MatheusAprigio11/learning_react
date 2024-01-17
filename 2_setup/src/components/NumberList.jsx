import React from 'react'

const NumberList = ({ numbers }) => {
    // estruturas de loop - for, while
    // metodos array - filter, map, reduce, etc

    //chaves - key
    // identificar unico para cada elemento
    return (
        <div>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    )
}

export default NumberList