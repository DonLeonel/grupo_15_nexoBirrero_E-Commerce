import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"

export const DetallesProductos = () => {

  const { id } = useParams();
  const _URL_DETALLE_PRODUCTO = `http://localhost:3000/api/producto/${id}`
  const { data, loading, error } = useFetch(_URL_DETALLE_PRODUCTO);

  return (
    <>
      <h3 className="tituloPage">Listado de Productos</h3>
      {loading ? <h4 className="loading"> Cargando... </h4>
        : error ? console.error('No se pudo mostrar el detalle del producto', error)
          : <div className="contenedorDetalles">
            <div className="descripcion">
            <span className="campo">Nombre:</span> {data.data.nombre}
            </div>
            <div className="descripcion">
            <span className="campo">Descripción:</span> {data.data.descripcion}
            </div>
            <div className="descripcion">
            <span className="campo">Precio:</span> ${data.data.precio}
            </div>
            <div className="descripcion">
            <span className="campo">Categoria:</span> {data.data.categoria.nombre}
            </div>
            <div id="descripcion">
            <span className="campo">Variedad:</span> {data.data.variedad}
            </div>
            <div className="descripcion">
            <span className="campo">Cervecera:</span> {data.data.cervecera}
            </div>
            <div className="descripcion">
            <span className="campo">Graduación Alcohólica:</span> {data.data.graduacion}
            </div>
            <div className="descripcion">
            <span className="campo">Volumen Contenido:</span> {data.data.volContenido} Ml.
            </div>
          </div>
      }
    </>
  )
}
