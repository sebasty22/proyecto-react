import React, { useState } from 'react'
import collar from "../../img/collar.jpg"




function ItemCount({ stock, initial, onADD}) {
    const [count, setCount] = useState(1);

    const sumar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(1)
    }

    

    return (
        <main>

        <div className='ContenedorCard'>
            <img className='imgProd' src={collar} alt="" />
            <h3>Collar <span>ONIX NEGRO</span></h3>
            <h4>{count}</h4>
            <div className='ContenedorContador'>
                <button disabled={count >= stock} onClick={sumar} className='sumar'><i class="fa-solid fa-plus"></i></button>
                <button disabled={count <= 1} onClick={restar} className='rest'><i class="fa-solid fa-minus"></i></button>
                <button onClick={reset} className='reset'><i class="fa-solid fa-rotate-right"></i></button>
                <button disabled={stock<=0} onClick={()=> onADD(count)}><i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
            </div>

        </div>
        </main>
    )
}

export default ItemCount

