import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"
import '../styles/detalleUserYProduct.css'

export const DetallesUsuarios = () => {

    const { id } = useParams();
    const _URL_DETALLE_USUARIO = `http://localhost:3000/api/usuario/${id}`;
    const { data, loading, error } = useFetch(_URL_DETALLE_USUARIO);

    return (
        <>
            <h3 className="tituloPage">Detalle de Usuario</h3>
            {loading ? <h4 className="loading"> Cargando... </h4>
                : error ? console.error('No se pudo mostrar el detalle del usuario', error)
                    : <div className="contenedorDetalles">
                        <div className="descripcion">
                            <span className="campo">Nombre:</span> {data.data.nombre}
                        </div>
                        <div className="descripcion">
                            <span className="campo">Apellido:</span> {data.data.apellido}
                        </div>
                        <div className="descripcion">
                            <span className="campo">Correo: </span>{data.data.correo}
                        </div>
                        <div className="descripcion">
                            <span className="campo">Rol:</span> {data.data.rol.nombre}
                        </div>
                        <div id="descripcion">
                            <span className="campo">Ciudad:</span> {data.data.ciudad || 'Sin Ciudad'}
                        </div>
                        <div className="descripcion">
                            <span className="campo">Telefono:</span> {data.data.telefono || 'Sin teléfono'}
                        </div>
                        <div className="descripcion">
                            <span className="campo">Fecha Nacimiento:</span> {data.data.fechaNac || 'Sin fecha'}
                        </div>
                    </div>
            }
        </>
    )
}
