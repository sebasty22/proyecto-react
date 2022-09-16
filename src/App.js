import React from "react" 
import ItemListContainer from "./components/ItemlistContainer/ItemListContainer"
import Navbar from "./components/navbar/Navbar"
import Count from "./components/Itemcount/itemCount"


const App =()=>{
    const bienvenida = "Saturno, donde la tierra y el alma se conecta ";
    const onADD =(count)=>{
        console.log(`compraste ${count} unidades `);
    }


    return (
        <>
        <Navbar />
        <ItemListContainer greeting={bienvenida}  />
        </>
    )
        
}

export default App
