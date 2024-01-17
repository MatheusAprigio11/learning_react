import React from 'react'

const Warning = ({warning}) => {
  
    if(!warning) {
        return null
    }
  
    return (
    <div>Warning</div>
  )
}

export default Warning