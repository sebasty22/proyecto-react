import React from 'react'
import "../ItemDetail/index.css"

function ItemDetail ({data}) {
    return (
        <>
        <div className='detail'>
        <img className='imgdetail' src={data.imagen} alt="" />
        <h2 className='titulodetail'>{data.nombre}</h2>
        </div>
        <p className='infodetail'>{data.info}</p>
        </>
    

        
    )
}

export default ItemDetail