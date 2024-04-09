import React from 'react'
import { MenuLateral } from './MenuLateral'
import { ListadoUsuarios } from './ListadoUsuarios'
import { ListadoRoles } from './ListadoRoles'
import { Route, Routes } from 'react-router-dom'
import { DetallesUsuarios } from './DetallesUsuarios'
import { UsuarioXRoles } from './UsuarioXRoles'
import '../styles/CountUserYProduct.css'
import { useFetch } from '../hooks/useFetch'

export const Usuarios = () => {
  const _URL_USUARIOS = "http://localhost:3000/api/usuarios"
  const { data, loading, error } = useFetch(_URL_USUARIOS)

  const _URL_ROLES = "http://localhost:3000/api/roles";
  const { data: dataRol, error: errorRol } = useFetch(_URL_ROLES);

  return (
    <>
      <MenuLateral
        to1={'/usuarios/listado'}
        to2={'/usuarios/roles'}
        nombre1={'Listados'}
        nombre2={'Roles'}
      />

      <div className='boxContainer'>
        {error ? console.log(error.message)
          : data &&
          <div className='boxCount'>
            <h6>Usuarios Registrados</h6>
            <p> <i className="fa-solid fa-users"></i> {data.meta.length}</p>
          </div>
        }
        {errorRol ? console.log(errorRol.message)
          : dataRol &&
          <div className='boxCount'>
            <h6>Roles Registrados</h6>
            <p><i className="fa-solid fa-users-gear"></i> {dataRol.meta.length}</p>
          </div>
        }          
      </div>

      <Routes>
        <Route path='/listado' element={<ListadoUsuarios />} />
        <Route path='/roles' element={<ListadoRoles />} />
        <Route path='/roles/detalle/:id' element={<UsuarioXRoles />} />
        <Route path='/detalle/:id' element={<DetallesUsuarios />} />
      </Routes>

    </>
  )
}
