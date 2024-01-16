import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(1);

  return (
    <div>
        <p>Voce clickou {count} vezes.</p>
        <button onClick={() => setCount(count + 1)}>butão</button>
        <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

export default Counter