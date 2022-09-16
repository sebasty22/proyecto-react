import React from 'react'
import Item from "../item/Item"

function ItemList({ListaProductos}) {
    
    return (<>
        {ListaProductos.map((prod,i)=> <Item key={`${prod.nombre}-${i}`} datos={prod} />)}
        </>
    )
}

export default ItemList
