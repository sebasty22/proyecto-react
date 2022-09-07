import React from "react" 
import ItemListContainer from "./components/ItemListContainer.js"
import Navbar from "./components/Navbar"


const App =()=>{
    const bienvenida = "Saturno, donde la tierra y el alma se conecta ";


    return (
        <>
        <Navbar />
        <ItemListContainer greeting={bienvenida}  />
        </>
    )
        
}

export default App
