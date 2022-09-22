import React,{useState, useEffect} from 'react'
import ItemDetail from "../ItemDetail"
import { fetch } from '../../promesa/fetch'
import { productos } from '../../stock/stock'

function ItemDetailContainer () {
    const[data,setData]= useState({})

    useEffect(()=>{
        fetch(productos[2])
           .then(res => setData(res))
        },[])          


    return (
        <div className='carddata'>
        <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer


