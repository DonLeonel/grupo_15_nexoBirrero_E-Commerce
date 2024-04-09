import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom';

export const ProductosXCategorias = () => {
    const { id } = useParams();
    const _URL_DETALLE_CATEGORIA = `http://localhost:3000/api/categoria/${id}`;
    const { data, loading, error } = useFetch(_URL_DETALLE_CATEGORIA);

    return (
        <>
            <h3 className='tituloPage'>Productos con categoría {data && data.data.nombre}</h3>
            {loading ? <h4 className='loading'> Cargando... </h4>
                : <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cervecera</th>
                            <th scope="col">Vol. Contenido</th>
                            <th scope="col">Graduación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {error ? console.error('algo salio mal al mostrar los productos', error)
                            : data.data.productos.map(p => {
                                return (
                                    <tr key={p.id}>
                                        <th scope="row">{p.id}</th>
                                        <td>{p.nombre}</td>
                                        <td>{p.cervecera}</td>
                                        <td>{p.volContenido} ml.</td>
                                        <td>{p.graduacion}</td>
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