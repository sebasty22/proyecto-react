import React from 'react'
import Item from "../item/Item"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function ItemList({ListaProductos}) {

    
    
    return (<> 
        {ListaProductos.map((prod,i)=> <Item key={`${prod.nombre}-${i}`} datos={prod} />)}
        
        </>
    )
}

export default ItemList
