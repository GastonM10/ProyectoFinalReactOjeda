import React from 'react'
import backgroundImage from '../../public/img/404.png';

const NotFound = () => {

    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

    return (
        <div style={divStyle} className='container pt-5 mt-5 mx-auto d-flex align-items-center justify-content-center text-center vh-100'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='text-white fs-4'>404</h1>
                    <p>Página no encontrada.</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound