import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { NavBar } from './components/NavBar'
import { Usuarios } from './components/Usuarios'
import { Productos } from './components/Productos'

export const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/usuario' element={<Usuarios/>}/>
        <Route path='/producto' element={<Productos/>}/>
      </Routes>
    </>
  )
}