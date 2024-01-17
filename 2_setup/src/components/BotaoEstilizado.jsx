import React from 'react'

const BotaoEstilizado = () => {
    //class => className
    //for = htmlFor

    const EstiloBotao = {
        backgroundColor: "#3f3f3f",
        color: "fff",
        padding: "15px 32px",
        cursor: "pointer",
    }

  return (
    <div>
        {/* <button style={{padding: "20px"}}>Clique em mim!</button>  Uma maneira de ser feita o css */}
        <button style={EstiloBotao}>Clique em mim!</button>
    </div>
  )
}

export default BotaoEstilizado