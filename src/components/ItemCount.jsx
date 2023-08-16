import React, { useState } from 'react'

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {
 
  return (
    <>
    <div className='d-flex'> 
        <button onClick={handleRestar} className='btn btn-secondary btn-sm'> - </button>
        <p style={{padding: '0 30px'}}>{cantidad}</p>
        <button onClick={handleSumar}className='btn btn-secondary btn-sm'> + </button>
    </div>
    <button className='btn btn-primary btn-sm' onClick={handleAgregar}>Agregar Carrito</button>

    </>
  )
}

export default ItemCount

