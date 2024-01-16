import React from 'react'

const RenderCondicional = ({ user }) => {

    //se houver usuário, exiba uma mensagem de boas vindas
  return (
    <div>{user && <h1>Bem-vindo de volta, {user}!</h1>}</div>
  )
}

export default RenderCondicional