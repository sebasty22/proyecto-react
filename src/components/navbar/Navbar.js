import React from 'react'
import logo from "../../img/logo2.png"
import CarritoImg from "../Cardwidget/CardWidget"
import estilos from "../styles.css"
import { NavLink } from 'react-router-dom'

const Navbar =()=> {
    return (
        <>
        <header>
            <div className='Titlog'>
            <img src={logo} className="Logo"/>
            <h1>Saturno</h1>
            </div>
            <nav>
                       
                        <ul class="menuNav">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/categoria/categoria1">Collares</NavLink></li>
                        <li><NavLink to="/categoria/categoria2">Anillos</NavLink></li>
                        </ul>
                        <CarritoImg/>
                        
                
                     </nav>
                     </header>         
         
                 
                
                
        
            
        
        </>
    )
}

export default Navbar
