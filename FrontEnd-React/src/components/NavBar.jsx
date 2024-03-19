import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavBar.css"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/usuario">Usuarios</Link>
                </li>
                <li>
                    <Link to="/producto">Productos</Link>
                </li>
            </ul>
        </nav>
    )
}

