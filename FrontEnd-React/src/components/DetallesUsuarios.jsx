import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"

export const DetallesUsuarios = () => {

    const { id } = useParams();
    const _URL_DETALLE_USUARIO = `http://localhost:3000/api/usuario/${id}`;
    const { data, loading, error } = useFetch(_URL_DETALLE_USUARIO);

    return (
        <>  
            <h3>Detalle de Usuario</h3>
            {loading ? <h4 className="loading"> Cargando... </h4>
                : error ? console.error('No se pudo mostrar el detalle del usuario', error)
                    : <div className="contenedorDetalles">
                        <div className="descripcion">
                            Nombre: {data.data.nombre}
                        </div>
                        <div className="descripcion">
                            Apellido: {data.data.apellido}
                        </div>
                        <div className="descripcion">
                            Correo: {data.data.correo}
                        </div>
                        <div className="descripcion">
                            Rol: {data.data.rol.nombre}
                        </div>
                        <div id="descripcion">
                            Ciudad: {data.data.ciudad || 'Sin Ciudad'}
                        </div>
                        <div className="descripcion">
                            Telefono: {data.data.telefono || 'Sin teléfono'}
                        </div>
                        <div className="descripcion">
                            Fecha Nacimiento: {data.data.fechaNac || 'Sin fecha'}
                        </div>
                    </div>
            }
        </>
    )
}
