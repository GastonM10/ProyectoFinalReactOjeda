import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config'

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [ producto, setProducto ] = useState(undefined);
    let [ loading, setLoading ] = useState(true);

    useEffect(() => {

        const prodRef = doc(db, "productos", itemId);
        getDoc(prodRef)
            .then(res => {
                if (res.data()) {
                    setProducto( { ...res.data(), id: res.id } );
                }
                setLoading(false);
            })
              
        }, [itemId]);

    if(loading){
        return <div className="pt-5 mt-5 d-flex justify-content-center align-items-center"><img src="../img/loading.gif" className="w-25" /></div>
    }else if(producto){
        return <ItemDetail producto={producto} />  
    }else{
        return <div className="pt-5 mt-5 d-flex justify-content-center align-items-center"><h1 className="text-white">No se ha encontrado el producto</h1></div>
    }



}

export default ItemDetailContainer