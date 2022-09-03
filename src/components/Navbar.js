import React from 'react'
import logo from "../img/logo2.png"
import styles from "../components/Navbar.css"

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
                        <li><a href="#">Menu1</a></li>
                        <li><a href="#">Menu2</a></li>
                        <li><a href="#">Menu3</a></li>
                        </ul>
                     </nav>
                
                
        
            
        </header>
        </>
    )
}

export default Navbar
