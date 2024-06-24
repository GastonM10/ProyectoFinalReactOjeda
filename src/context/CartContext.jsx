import { createContext, useEffect, useState } from "react";

export const CartContext =  createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const addToCart = (producto, cantidad = 1) => {
      const addItem = { ...producto, cantidad };
      const nuevoCarrito = [...carrito];
      const estaEnElCarrito = nuevoCarrito.find((item) => item.id === addItem.id);

      if (estaEnElCarrito) {
          estaEnElCarrito.cantidad += cantidad;
      } else {
          nuevoCarrito.push(addItem);
      }
      setCarrito(nuevoCarrito);
    };

    const remItem = (producto) => {
      const nuevoCarrito = carrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
      ).filter(item => item.cantidad > 0);
      setCarrito(nuevoCarrito);
    };
  
    const calcCant = () => {
      return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    }
  
    const calcTot = () => {
      return carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    }
  
    const emptyCartCheckout = () => {
      setCarrito([]);  
    }

    const emptyCart = () => {
      Swal.fire({
        title: "Está seguro que desea vaciar el carrito?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#76DA3E",
        confirmButtonText: "Sí, estoy seguro",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if(result.isConfirmed) {
          setCarrito([]);  
        }
      });
    }

    const deleteProduct = (producto) => {
      const prodFound = carrito.find(prod => prod.id === producto.id);
      const indice = carrito.indexOf(prodFound);
      
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(indice, 1);
      setCarrito(nuevoCarrito);

      Toastify({
        text: "Se quitó del carrito:\n" + producto.nombre + " ✖️",	
        style: {
          background: "linear-gradient(to right, #FF2525, #FE0000)"
        },
        offset: {
          y: 50,
        }
      }).showToast();
    }

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CartContext.Provider value={ { carrito, calcCant, calcTot, emptyCart, deleteProduct, addToCart, remItem, emptyCartCheckout } }>
            {children}
        </CartContext.Provider>
    )
}