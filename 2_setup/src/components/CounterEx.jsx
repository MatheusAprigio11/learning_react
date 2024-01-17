import React, { useState } from 'react'

const CounterEx = () => {

    const [count, setCount] = useState(0);
  return (
    <div>
        {count >= 3 ? <p>Você clickou {count} vezes no botão</p> : <p>{count}</p>}
        <button onClick={() => setCount(count + 1)}>cricka mofi</button>
        <button onClick={() => setCount(0)}>reseta contagi mofi</button>
        <button onClick={() => setCount(count - 1)}>tira um mofi</button>
    </div>
  )
}

export default CounterEx