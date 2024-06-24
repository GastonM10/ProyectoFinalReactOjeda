import React from 'react'

export const ItemCount = ( { cantidad, handleAgregar, handleSumar, handleRestar } ) => {
    return (
        <div className='mb-1 d-flex align-items-center justify-content-center'>
            <button className='btn btn-danger btn-sm m-1' onClick={handleRestar}>-</button>
            <span className='m-1'>{cantidad}</span>
            <button className='btn btn-primary btn-sm m-1' onClick={handleSumar}>+</button>
            <button className='btn btn-light btn-sm m-1' onClick={handleAgregar}>🛒</button>
        </div>
    );
}
