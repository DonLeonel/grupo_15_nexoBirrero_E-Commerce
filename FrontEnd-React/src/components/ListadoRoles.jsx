import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

export const ListadoRoles = () => {
  const _URL_ROLES = "http://localhost:3000/api/roles";
  const { data, loading, error } = useFetch(_URL_ROLES);

  return (
    <>
      {loading ? <h4 className="loading"> Cargando... </h4>
       :  <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Usuario por Rol</th>
            </tr>
          </thead>
          <tbody>
            {error
              ? console.error("algo salio mal al mostrar los usuarios", error)
              : data.data.map((r) => {
                  return (
                    <tr key={r.id}>
                      <th scope="row">{r.id}</th>
                      <td>{r.nombre}</td>
                      <td>{r.descripcion}</td>
                      <td>
                        <Link to={`/rol/listado/detalle/${r.id}`}>
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
  );
};
