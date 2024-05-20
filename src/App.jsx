import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/header/Header'
import './css/main.css'

function App() {

  const h1ItemListContainer = "Galeria de productos";

  return (
    <>
      <Header />
      <ItemListContainer titleH1={h1ItemListContainer} />
    </>
  )
}

export default App