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
            <section>
                <div>
                    <Link to="/usuarios" className="react-link">Usuarios</Link>
                </div>
                <div>
                    <Link to="/productos" className="react-link">Productos</Link>
                </div>
            </section>
        </nav>
    )
}