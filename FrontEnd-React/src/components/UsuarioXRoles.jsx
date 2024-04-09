import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom';

export const UsuarioXRoles = () => {

  const { id } = useParams();
  const _URL_DETALLE_ROL = `http://localhost:3000/api/rol/${id}`;
  const { data, loading, error } = useFetch(_URL_DETALLE_ROL);

  return (
    <>
      <h3 className='tituloPage'>Usuarios con rol {data && data.data.nombre}</h3>
      {loading ? <h4 className='loading'> Cargando... </h4>
        : <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          <tbody>
            {error
              ? console.error("algo salio mal al mostrar los usuarios", error)
              : data.data.usuarios.map((u) => {
                return (
                  <tr key={u.id}>
                    <th scope="row">{u.id}</th>
                    <td>{u.nombre}</td>
                    <td>{u.apellido}</td>
                    <td>{u.correo}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      }
    </>
  )
}
