import React from 'react'
import {MenuLateral} from './MenuLateral'
import { ListadoUsuarios } from './ListadoUsuarios'
import { ListadoRoles } from './ListadoRoles'
import { Route,Routes } from 'react-router-dom'

export const Usuarios = () => {
  return (
    <>
    <MenuLateral
      to1={'/usuarios/listado'}
      to2={'/usuarios/roles'}
      nombre1={'Listados'}
      nombre2={'Roles'}
      />
    <Routes>
    <Route path='/listado' element={<ListadoUsuarios />} />
    <Route path='/roles' element={<ListadoRoles />} />
</Routes>
      </>
  )
}
