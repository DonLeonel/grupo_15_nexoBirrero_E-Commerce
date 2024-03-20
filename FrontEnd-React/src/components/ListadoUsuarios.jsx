import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ListadoUsuarios = () => {

    const [usuarios,setUsuarios] = useState([])

    const fetchData = () => {
        fetch('http://localhost:3000/api/usuarios')
        .then(res => res.json())
        .then(data => {
            setUsuarios(data.data)
        })
    }

    useEffect (()=> {
        fetchData()
    },[]) 

  return (
    <table className="table p-5">
            <thead className=''>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Ver Detalle</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(u=> {
                    return(
                <tr key={u.id}>
                    <th scope="row">{u.id}</th>
                    <td>{u.nombre}</td>
                    <td>{u.apellido}</td>
                    <td>{u.correo}</td>
                    <td>{u.telefono}</td>
                    <td><Link to='/usuario/listado/detalle/'><i className="fa-regular fa-eye"></i></Link></td>
                </tr>)         
                })}
            </tbody>
        </table>
  )
}
