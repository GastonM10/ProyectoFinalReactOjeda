import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import '../css/main.css' 

const Carrito = () => {

    const { carrito, calcTot, deleteProduct, emptyCart } = useContext(CartContext);

    return (
        <div className='container mt-5 pt-5 custom-height'>
            {carrito.map((prod) => (
                <div key={prod.id} className='d-flex justify-content-center'>
                    <div className="card mb-3 mb-lg-0 m-1 bg-light w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div>
                                        <img src={prod.imagen} className="img-fluid rounded-3 custom-width-100" />
                                    </div>
                                    <div className="ms-3 custom-width-350">
                                        <h5>{prod.nombre}</h5>
                                        <p className="small mb-0">$ {prod.precio.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="custom-width-80">
                                        <h5 className="fw-normal mb-0">x {prod.cantidad}</h5>
                                    </div>
                                    <div className="custom-width-120">
                                        <h5 className="mb-0">$ {(prod.precio * prod.cantidad).toFixed(2)}</h5>
                                    </div>
                                    <button className='btn btn-light' onClick={() => deleteProduct(prod)}>🗑️</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {carrito.length > 0 ? (
                <div className='mt-5 d-flex justify-content-start'>
                    <div className=''>
                        <h2>Total $ {calcTot().toFixed(2)}</h2>
                        <button className="btn btn-danger m-1" onClick={emptyCart}>Vaciar carrito</button>
                        <Link to="/finalizar-compra"><button className='btn btn-success m-1'>Ir a finalizar compra</button></Link>
                    </div>
                </div>
            ) : (
                <div className='d-flex justify-content-center'>
                    <h2 className='fs-2 fw-normal'>El carrito se encuentra vacío, chequeá nuestros productos de la <Link to="/" className='text-decoration-none'>Tienda</Link></h2>
                </div>
            )}
        
        </div>
    )

}

export default Carrito