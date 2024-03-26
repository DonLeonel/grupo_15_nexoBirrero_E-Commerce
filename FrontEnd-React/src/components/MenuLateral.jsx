import React from 'react'
import { Link } from 'react-router-dom'

export const MenuLateral = ({ to1, to2, nombre1, nombre2 }) => {
  return (
    <nav className='menuLateral'>
      <section>
        <div>
          <Link to={to1} className='react-link'>{nombre1}</Link>
        </div>
        <div>
          <Link to={to2} className='react-link'>{nombre2}</Link>
        </div>
      </section>
    </nav>
  )
}
