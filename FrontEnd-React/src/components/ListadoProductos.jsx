import React from 'react'

export const ListadoProductos = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cervecera</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Graduación</th>
                    <th scope="col">Ver Detalle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Vera Ipa</td>
                    <td>Patagonia</td>
                    <td>Trigo</td>
                    <td>9.1</td>
                    <td>Emoji</td>
                </tr>                
            </tbody>
        </table>
    )
}
