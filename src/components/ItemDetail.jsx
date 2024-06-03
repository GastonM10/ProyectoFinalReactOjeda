import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";
import '../css/main.css';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])
    

  return (
    <div className='d-flex justify-content-center align-items-center pt-4 item-detail'>
        {
            producto ? 
            <div className="card mb-5 text-bg-secondary">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center p-1">
                    <a href={producto.imagen}><img src={producto.imagen} className="img-fluid rounded" /></a>
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body">
                            <h5 className="card-title fs-1 fw-bold">{producto.nombre}</h5>
                            <p className="card-text fs-3">{producto.descripcion}</p>
                            <p className="card-text fs-1 fw-bold">$ {producto.precio}</p>
                            <button type="button" className="btn btn-success">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            : <div className="d-flex justify-content-center align-items-center"><img src="../src/assets/img/loading.gif" className="w-25" /></div>
        }
    </div>
  )
}

export default ItemDetailContainer