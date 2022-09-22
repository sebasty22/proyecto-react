import React from 'react'
import estilosItems from "./item.css"

function Item({datos}) {
    return (
    <>
    
    <div className='card'>
        <img src={datos.imagen} alt="" className='imagenProductos' />
        <h4>{datos.nombre} </h4>
        <p>{datos.precio}</p>

        </div>
        
    </>
    )
}

export default Item
