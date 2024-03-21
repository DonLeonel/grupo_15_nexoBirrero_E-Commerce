import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export const ListadoCategorias = () => {

  const _URL_CATEGORIAS = 'http://localhost:3000/api/categorias'
  const { data, loading, error } = useFetch(_URL_CATEGORIAS)

  return (
    <>
      <h3>Listado de Categorías</h3>
      {loading ? <h4 className="loading"> Cargando... </h4>
        : <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Producto por Categoría</th>
            </tr>
          </thead>
          <tbody>
            {error
              ? console.error("algo salio mal al mostrar los usuarios", error)
              : data.data.map((c) => {
                return (
                  <tr key={c.id}>
                    <th scope="row">{c.id}</th>
                    <td>{c.nombre}</td>
                    <td>{c.descripcion}</td>
                    <td>
                      <Link to={`/productos/categorias/detalle/${c.id}`}>
                        <i className="fa-regular fa-eye"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      }
    </>
  )
}
