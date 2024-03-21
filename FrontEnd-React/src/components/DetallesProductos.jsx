import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"

export const DetallesProductos = () => {

  const { id } = useParams();
  const _URL_DETALLE_PRODUCTO = `http://localhost:3000/api/producto/${id}`
  const { data, loading, error } = useFetch(_URL_DETALLE_PRODUCTO);

  return (
    <>
      <h3>Listado de Productos</h3>
      {loading ? <h4 className="loading"> Cargando... </h4>
        : error ? console.error('No se pudo mostrar el detalle del producto', error)
          : <div className="contenedorDetalles">
            <div className="descripcion">
              Nombre: {data.data.nombre}
            </div>
            <div className="descripcion">
              Descripción: {data.data.descripcion}
            </div>
            <div className="descripcion">
              Precio: ${data.data.precio}
            </div>
            <div className="descripcion">
              Categoria: {data.data.categoria.nombre}
            </div>
            <div id="descripcion">
              Variedad: {data.data.variedad}
            </div>
            <div className="descripcion">
              Cervecera: {data.data.cervecera}
            </div>
            <div className="descripcion">
              Graduación Alcohólica: {data.data.graduacion}
            </div>
            <div className="descripcion">
              Volumen Contenido: {data.data.volContenido} Ml.
            </div>
          </div>
      }
    </>
  )
}
