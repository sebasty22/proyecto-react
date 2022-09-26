import React,{useState, useEffect} from 'react'
import ItemDetail from "../ItemDetail"
import { productos } from '../../stock/stock'
import { Link, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function ItemDetailContainer () {
    const[data,setData]= useState({})
    
    const{ detailId }=useParams();

    useEffect(()=>{
        const detailData = new Promise(
            resolve=>{setTimeout(()=>{
                resolve(productos)
            },1000)

            }
        );
        detailData.then(res=>setData(res.find(prod => prod.id===parseInt(detailId))));
    },[])


    return (
       
        <div className='carddata'>
         
        <ItemDetail data={data}/>
        
        </div>
    )
}

export default ItemDetailContainer


