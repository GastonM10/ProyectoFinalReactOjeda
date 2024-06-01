import React from 'react'
import { Item } from './Item'
import '../css/cards.css'

export const ItemList = ( {productos} ) => {

  return (
    <div className="row d-flex justify-content-center align-items-center">
      {
        productos.length > 0 ?
        productos.map(producto => {
          return <Item key={producto.id} producto={producto} />
        })
        : <div className="d-flex justify-content-center align-items-center"><p>Cargando productos...</p></div>
      }
    </div>
  )
}