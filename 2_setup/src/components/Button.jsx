import React from 'react'

const Button = () => {

    const handleClick = (num) => {
        console.log("Clickou!", num);
    }


  return (
    <div>
        <button onClick={() => handleClick(5)}>cricka mofi</button>
    </div>
  )
}

export default Button