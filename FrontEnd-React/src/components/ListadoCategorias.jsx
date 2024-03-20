import React from 'react'

export const ListadoCategorias = () => {
  return (
    <table className="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>            
            <th scope="col">Producto por Categoría</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Trigo</td>
            <td>Descripción</td>
            <td>Emoji</td>
        </tr>                
    </tbody>
</table>
  )
}
