import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/EstiloGlobal.css"
import logo from "../assets/logo-nexo-birrero.png"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className='caja-logo-react'> 
                <Link to='/'><img src={logo}/></Link>
            </div>
            <ul>
                <li>
                    <Link to="/usuarios">Usuarios</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>
        </nav>
    )
}