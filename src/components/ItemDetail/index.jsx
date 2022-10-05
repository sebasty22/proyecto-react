import React,{useContext, useState} from 'react'
import ItemCount from '../Itemcount/itemCount'
import estilos from "../ItemDetail/index.css"
import count from "../Itemcount/itemCount"
import { Link } from 'react-router-dom'
import {CartContext} from "../../context/CartContext"




function ItemDetail ({data}) {

    const [carrito,setCarrito]=useState(false);
    const{cart,addItem}= useContext(CartContext)



    
    

    const onADD =(count)=>{
        addItem(data,count)
        setCarrito(true);
        
    }
    console.log(cart);


    return (
        <>
        <div className='detail'>
        <img className='imgdetail' src={data.imagen} alt="" />
        <h2 className='titulodetail'>{data.nombre}</h2>
        </div>
        <p className='infodetail'>{data.info}</p>
        {
            carrito ? <Link to="/carrito">Terminar compra</Link>
                    :<ItemCount initial={1} stock={5} onADD={onADD}/>
        }
        
        </>
    

        
    )
}

export default ItemDetail