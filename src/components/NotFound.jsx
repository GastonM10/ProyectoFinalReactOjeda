import React from 'react'
import backgroundImage from '../../public/img/404.png';

const NotFound = () => {

    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

    return (
        <div style={divStyle} className='container d-flex justify-content-center vh-100'>
        </div>
    )
}

export default NotFound