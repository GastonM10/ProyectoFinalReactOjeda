import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount';

export const Item = ( { producto } ) => {

    const {addToCart} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    };

    const handleSumar = () => {
        setCantidad(cantidad + 1);
        
    };

    const handleAgregar = () => {
        addToCart(producto, cantidad);

        Toastify({
            text: "Se agregó al carrito ✔️\n▶️ " + producto.nombre + " x " + cantidad,
            destination: "/carrito",
            style: {
                background: "linear-gradient(to right, #57FF10, #6EFF30)",
                color: "#313131"
            },
            offset: {
                y: 50,
            }
        }).showToast();
    };
  
    return (
        <div className="col-4 mb-3 w-25">
            <div className="producto">
                <div className="card text-bg-success custom-card-height">
                    <img src={producto.imagen} className="rounded-top" />
                    <div className="card-header fs-5 text-center">{producto.nombre}</div>
                    <Link to={`/item/${producto.id}`} className="btn btn-secondary">Más info</Link>
                    <div className="card-body">
                        <h5 className="text-center card-title fw-bold">$ {producto.precio}</h5>
                        <ItemCount
                            cantidad={cantidad}
                            handleSumar={handleSumar}
                            handleRestar={handleRestar}
                            handleAgregar={handleAgregar}
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}