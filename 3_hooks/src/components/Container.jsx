import React from 'react'

const Container = ({ children }) => {
  return (
    <div>
        <h2>Testando</h2>
        <div>{children}</div>
        <p>Terminou</p>
    </div>
  )
}

export default Container