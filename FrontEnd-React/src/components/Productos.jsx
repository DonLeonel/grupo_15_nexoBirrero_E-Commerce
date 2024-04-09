import React from 'react'
import { ListadoProductos } from './ListadoProductos'
import { Routes, Route } from 'react-router-dom'
import { MenuLateral } from './MenuLateral'
import { ListadoCategorias } from './ListadoCategorias'
import { DetallesProductos } from './DetallesProductos'
import { ProductosXCategorias } from './ProductosXCategorias'
import { useFetch } from '../hooks/useFetch'

export const Productos = () => {

    const _URL_PRODUCTOS = 'http://localhost:3000/api/productos'
    const { data, error } = useFetch(_URL_PRODUCTOS); 

    const _URL_CATEGORIAS = 'http://localhost:3000/api/categorias'
    const { data: dataCateg, error: errorCateg } = useFetch(_URL_CATEGORIAS)

    return (
        <>
            <MenuLateral
                to1={'/productos/listado'}
                nombre1={'Listado'}
                to2={'/productos/categorias'}
                nombre2={'Categorías'}
            />

            <div className='boxContainer'>
                {error ? console.log(error.message)
                    : data &&
                    <div className='boxCount'>
                        <h6>Productos Registrados</h6>
                        <p> <i className="fa-solid fa-beer-mug-empty"></i> {data.meta.length}</p>
                    </div>
                }
                {errorCateg ? console.log(errorCateg.message)
                    : dataCateg &&
                    <div className='boxCount'>
                        <h6>Categorías Registradas</h6>
                        <p><i class="fa-solid fa-table-cells"></i> {dataCateg.meta.length}</p>
                    </div>
                }
            </div>

            <Routes>
                <Route path='/listado' element={<ListadoProductos />} />
                <Route path='/categorias' element={<ListadoCategorias />} />
                <Route path='/categorias/detalle/:id' element={<ProductosXCategorias />} />
                <Route path='/detalle/:id' element={<DetallesProductos />} />
            </Routes>
        </>
    )
}