import React from 'react'
import logo from "../img/logo2.png"
import CarritoImg from "./CardWidget"
import estilos from "..//components/styles.css"

const Navbar =()=> {
    return (
        <>
        <header>
            <div className='Titlog'>
            <img src={logo}/>
            <h1>Saturno</h1>
            </div>
            <nav>
                       
                        <ul class="menuNav">
                        <li><a href="">Menu1</a></li>
                        <li><a href="">Menu2</a></li>
                        <li><a href="">Menu3</a></li>
                        </ul>
                        <CarritoImg/>
                        
                
                     </nav>
                     </header>         
         
                 
                
                
        
            
        
        </>
    )
}

export default Navbar
