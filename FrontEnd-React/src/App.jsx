import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { NavBar } from './components/NavBar'
import { Usuarios } from './components/Usuarios'
import { Productos } from './components/Productos'
import { Inicio } from './components/Inicio'

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route path='/usuarios/*' element={<Usuarios />} />
        <Route path='/productos/*' element={<Productos />} />        
      </Routes>
    </>
  )
}