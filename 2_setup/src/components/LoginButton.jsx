import React from 'react'

const LoginButton = ({loggedIn}) => {
    
  return (
    <div>{loggedIn ? <button>Sair</button> : <button>Logar</button>}</div>
  )
}

export default LoginButton