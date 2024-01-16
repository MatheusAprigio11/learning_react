import React from 'react'

const FilhoFunction = ({ onChildClick }) => {
  return (
    <div>
        <button onClick={onChildClick}>Botão Filho! </button>
    </div>
  )
}

export default FilhoFunction