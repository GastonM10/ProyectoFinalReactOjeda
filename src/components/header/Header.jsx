import { NavBar } from './NavBar'
import { Carrito } from './Carrito'

export const Header = (props) => {
  
  return (
    <header className='header bg-black fixed-top mb-5'>
        <div className='container'> 
          <div className='row align-items-center'>
            <div className='col-3 d-flex align-items-center'>
              <h1 className='display-6'>Maluco 🐈</h1>
            </div>
            <div className='col-6'>
              <NavBar />
            </div>
            <div className='col-3 d-flex align-items-center justify-content-end text-white'>
              <Carrito cantItem={props.cantItem} />
            </div>
          </div>
        </div>
    </header>
  )
}
