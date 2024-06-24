import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Header = () => {
  
  return (
    <header className='header bg-black fixed-top mb-5'>
        <div className='container'> 
          <div className='row align-items-center'>
            <div className='col-2 d-flex align-items-center'>
              <Link to="/" className='text-decoration-none'><h1 className='fs-2 fw-normal'>Maluco 🐈</h1></Link>
            </div>
            <div className='col-8'>
              <NavBar/>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-end text-white'>
              <CartWidget/>
            </div>
          </div>
        </div>
    </header>
  )
}
