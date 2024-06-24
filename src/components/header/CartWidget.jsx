import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

  const { calcCant } = useContext(CartContext);

  return (
    <Link className='carrito text-decoration-none text-white' to="/carrito">
        🛒 {calcCant()}
    </Link>
  )
}
