import React from 'react'

export const ListadoRoles = () => {
  return (
    <table className="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>            
            <th scope="col">Usuario por Rol</th>
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
