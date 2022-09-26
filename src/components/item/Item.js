import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./item.css"


function Item({datos}) {
    return (
    <>
       <div className='card'>
        <Link to={`/detail/${datos.id}`}>
        <img src={datos.imagen} alt="" className='imagenProductos' />
        <h4>{datos.nombre} </h4>
        <p>{datos.precio}</p>
        </Link>
        </div>
        
    
    </>
    )
}

export default Item
