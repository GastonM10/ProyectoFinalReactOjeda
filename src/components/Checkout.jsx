import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export const Checkout = () => {

    const { carrito, calcCant, calcTot, emptyCartCheckout } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcTot(),
            fecha: Timestamp.now()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                emptyCartCheckout();
            })
    }

    if (docId) {
        return (
            <div className='container mt-5 pt-5 d-flex text-center'>
            <div className='row'>
                <h1>Su compra ha sido realizada con éxito😸</h1>
                <p>Para realizar el seguimiento de su pedido, utilice el siguiente código identificador:</p>
                <p className='fs-3'>{docId}</p>
            </div>
            </div>
        )
    }

    return (
        <div className='container mt-5 pt-5 d-flex justify-content-center custom-height'>
            { calcCant() > 0 ? (
                <form onSubmit={handleSubmit(comprar)} className='justify-content-center'>
                    <h1>Complete sus datos para finalizar la compra</h1>

                    <div className="form-group m-1">
                        <label for="fullname">Nombre y Apellido</label>
                        <input type="text" className="form-control" placeholder="Nombre y apellido" {...register("name")} required />
                    </div>
                    <div className="form-group m-1">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" placeholder="E-mail" {...register("email")} required />
                    </div>
                    <div className="form-group m-1">
                        <label for="phone">Teléfono</label>
                        <input type="phone" className="form-control" placeholder="Teléfono" {...register("phone")} required />
                    </div>
                    <div className="form-group mt-3 ms-1">
                        <button type="submit" className="btn btn-success">Comprar</button>
                    </div>

                </form>
            ) : <div className='d-flex justify-content-start'>
                    <h2>El carrito se encuentra vacío</h2>
                </div>
            }
        </div>
    )
}
