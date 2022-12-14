import React from "react" 
import ItemListContainer from "./components/ItemlistContainer/ItemListContainer"
import Navbar from "./components/navbar/Navbar"
import Count from "./components/Itemcount/itemCount"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {CartProvider} from "./context/CartContext"




const App =()=>{
    const bienvenida = "Saturno, donde la tierra y el alma se conecta ";
    

    return (
        <>
        <BrowserRouter>
        <CartProvider>
        <Navbar />
        <Routes>
        <Route path="/" element={<ItemListContainer greeting={bienvenida}  />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={bienvenida}  />} />
        <Route path="/detail/:detailId" element={<ItemDetailContainer  />} />
        </Routes>
        </CartProvider>
        </BrowserRouter>
        </>
    )
        
}

export default App
