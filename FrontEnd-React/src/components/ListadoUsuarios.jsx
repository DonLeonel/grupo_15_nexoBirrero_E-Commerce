import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const ListadoUsuarios = () => {
  const _URL_USUARIOS = "http://localhost:3000/api/usuarios";
  const { data, loading, error } = useFetch(_URL_USUARIOS); //Hook reutilizable para hacer fetch.

  return (
    <>
      <h3>Listado de Usuarios</h3>
      {loading ? (
        <h4 className="loading"> Cargando... </h4>
      ) : (
        <table className="table p-5">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>

              <th scope="col">Ver Detalle</th>
            </tr>
          </thead>
          <tbody>
            {error
              ? console.error("algo salio mal al mostrar los usuarios", error)
              : data.data.map((u) => {
                return (
                  <tr key={u.id}>
                    <th scope="row">{u.id}</th>
                    <td>{u.nombre}</td>
                    <td>{u.apellido}</td>
                    <td>{u.correo}</td>
                    <td>
                      <Link to={`/usuarios/detalle/${u.id}`}>
                        <i className="fa-regular fa-eye"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
};
