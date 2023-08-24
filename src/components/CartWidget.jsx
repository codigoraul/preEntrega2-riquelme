import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    
    const {cantidadEncarrito} = useContext(CartContext)

  return (

    <div>
      <Link className="btn btn-outline-dark nav-link" to="/carrito">
        Carrito <span className="numerito">{cantidadEncarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget