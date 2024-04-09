import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export const ListadoProductos = () => {

    const _URL_PRODUCTOS = 'http://localhost:3000/api/productos'
    const { data, loading, error } = useFetch(_URL_PRODUCTOS);     //Hook reutilizable para hacer fetch.   

    return (
        <>
            <h3 className='tituloPage'>Listado de Usuarios</h3>
            {loading ? <h4 className='loading'> Cargando... </h4>
                : <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cervecera</th>
                            <th scope="col">Vol. Contenido</th>
                            <th scope="col">Graduación</th>
                            <th scope="col">Ver Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {error ? console.error('algo salio mal al mostrar los productos', error)
                            : data.data.map(p => {
                                return (
                                    <tr key={p.id}>
                                        <th scope="row">{p.id}</th>
                                        <td>{p.nombre}</td>
                                        <td>{p.cervecera}</td>
                                        <td>{p.volContenido} ml.</td>
                                        <td>{p.graduacion}</td>
                                        <td><Link to={`/productos/detalle/${p.id}`}><i className="fa-regular fa-eye"></i></Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </>
    )
}
