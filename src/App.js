import React from "react" 
import ItemListContainer from "./components/ItemListContainer.js"
import Navbar from "./components/Navbar"
import Count from "./components/itemCount"


const App =()=>{
    const bienvenida = "Saturno, donde la tierra y el alma se conecta ";
    const onADD =(count)=>{
        console.log(`compraste ${count} unidades `);
    }


    return (
        <>
        <Navbar />
        <ItemListContainer greeting={bienvenida}  />
        <Count stock={10} initial={1} onADD={onADD}/>
        </>
    )
        
}

export default App
