import React from 'react'
import { useState, useEffect } from 'react'
import estilos from "../styles.css"
import {productos} from "../../stock/stock"
import ItemList from '../ItemList/ItemList'
import Item from "../item/Item"
import { useParams } from 'react-router-dom'


const ItemListContainer =({greeting})=>{

   const [ListaProductos, setListaProductos]= useState([])

   const{categoriaId}=useParams();

   useEffect(()=>{
      const prod=new Promise(resolve=>{
         setTimeout(()=>{
            resolve(productos);

         },1000)
   })
   if(categoriaId){
      prod.then(res=>setListaProductos(res.filter(producto=>producto.categoria === categoriaId)))

   } 
   else{prod.then(res=>setListaProductos(res))}
      
   },[categoriaId])
   


   


   return (
   <>
   <h2 className='subtitulo'>Bienvenido a {greeting} </h2>
   <div className='Datos'>
   <ItemList ListaProductos={ListaProductos} />
   </div>
   </>)
}




export default ItemListContainer




