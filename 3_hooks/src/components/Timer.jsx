import { useState, useEffect } from 'react'

const Timer = () => {

    const [segundos, setSegundos] = useState(0);

    //setInterval, setTimeout
    useEffect(() => {
        const intervalID = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])

  return (
    <div>
        <p>Timer: {segundos} segundos.</p>
    </div>
  )
}

export default Timer