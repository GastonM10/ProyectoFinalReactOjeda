import { NavBar } from './NavBar'
import { Carrito } from './Carrito'

export const Header = () => {
  return (
    <header className='header mb-2 bg-black'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-4 d-flex align-items-center'>
              <h1 className='display-6'>Maluco 🐈</h1>
            </div>
            <div className='col-4'>
              <NavBar />
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end text-white'>
              <Carrito />
            </div>
          </div>
        </div>
    </header>
  )
}
