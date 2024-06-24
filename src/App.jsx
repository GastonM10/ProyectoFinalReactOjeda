import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { ItemListContainer } from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from './components/Carrito';
import NotFound from './components/NotFound';
import './css/main.css'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/finalizar-compra" element={<Checkout/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App