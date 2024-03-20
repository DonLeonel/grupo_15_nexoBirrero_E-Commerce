import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavBar.css"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className='logo'>
                <Link to='/'>LOGO</Link>
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

