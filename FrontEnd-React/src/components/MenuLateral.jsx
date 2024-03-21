import React from 'react'
import { Link } from 'react-router-dom'

export const MenuLateral = ({ to1, to2, nombre1, nombre2 }) => {
  return (
    <nav className='menuLateral'>
      <ul>
        <li><Link to={to1}>{nombre1}</Link></li>
        <li><Link to={to2}>{nombre2}</Link></li>
      </ul>
    </nav>
  )
}
