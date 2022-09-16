import React from 'react'
import { useState, useEffect } from 'react'
import estilos from "../styles.css"
import {productos} from "../../stock/stock"
import { fetch } from '../../promesa/fetch'
import ItemList from '../ItemList/ItemList'
import Item from "../item/Item"

const ItemListContainer =({greeting})=>{

   const [ListaProductos, setListaProductos]= useState([])

   useEffect(()=>{
      fetch(productos)
         .then(res => setListaProductos(res))

   },[])


   return (
   <>
   <h2>Bienvenido a {greeting} </h2>
   <div className='Datos'>
   <ItemList ListaProductos={ListaProductos} />
   </div>
   </>)
}




export default ItemListContainer




