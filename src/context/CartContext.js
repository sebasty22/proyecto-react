import { createContext,useState } from "react";

export const CartContext = createContext();

  export   const  CartProvider = ({children}) =>{
    const [cart,setCart]=useState([])
    
    const BorrarCarrito=()=>setCart([]);

    const estaencarrito=(id)=> cart.find(product=>product.id===id)? true : false;

    const BorrarProducto=(id)=>setCart(cart.filter(product=>product.id !==id));

    const addItem=(data, count)=>{
        if(estaencarrito(data.id)){
            setCart(cart.map(product=>{
                return product.id === data.id ?{...product, count:product.count+ count}:product
            }))
        }
        else{
            setCart([...cart,{...data, count}])
        }
    }

    
    return(
        <CartContext.Provider value={{cart, addItem,BorrarCarrito,BorrarProducto,estaencarrito}}>{children}</CartContext.Provider>
    )
}
