import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {producto} ) => {
  
    return (
        <div className="col-4 mb-3 w-25">
            <div className="producto">
                <div className="card text-bg-success custom-card-height">
                    <img src={producto.imagen} className="rounded-top" alt="..." />
                    <div className="card-header fs-5">{producto.nombre}</div>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">$ {producto.precio}</h5>
                        <p className="card-text">{producto.descripcion}</p>
                    </div>
                    <Link to={`/item/${producto.id}`} className="btn btn-secondary">Más info</Link>
                </div>
            </div>
        </div>
  )
}