import React, { useEffect, useState } from 'react';
import data from "../data/productos.json";
import categories from "../data/categorias.json";
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';

export const ItemListContainer = (props) => {
  
  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState(props.h1Prods);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {
    
    pedirProductos()
      .then((res) => {
        if (!categoryId) {
          setTitulo(props.h1Prods);
          setProductos(res);
        } else {
          setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
          setProductos(res.filter((prod) => prod.categoria.id === categoryId));
        }
      })
      
  }, [categoryId]);

  return (
    <div className="items-list-container">
      <h1 className="display-4 fw-normal pb-3">{titulo}</h1>
      <div className="container">
        <div className="row">
            <ItemList productos={productos} />
        </div>
      </div>
    </div>
  )
  
}
