import React from 'react'
import { ListadoProductos } from './ListadoProductos'
import { Routes, Route } from 'react-router-dom'
import { MenuLateral } from './MenuLateral'
import { ListadoCategorias } from './ListadoCategorias'

export const Productos = () => {
    return (
        <>
            <MenuLateral
                to1={'/productos/listado'}
                nombre1={'Listado'}
                to2={'/productos/categorias'}
                nombre2={'Categorías'}
            />
            <Routes>
                <Route path='/listado' element={<ListadoProductos />} />
                <Route path='/categorias' element={<ListadoCategorias />} />
            </Routes>
        </>
    )
}