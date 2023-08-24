import { Link } from "react-router-dom"


const Item = ( {producto} ) => {
  return (
    <div className="col-md-4 mt-5">
      <Link to={`/item/${producto.id}`}>
        <h4>{producto.titulo}</h4>
        <img style={{cursor: 'pointer'}} src={producto.imagen} className="img-fluid" alt="" />
        </Link>
        <p className="mt-3"><b>Precio:$ </b>{producto.precio}</p>
        <p className="categoria"><b>Categoría:</b>{producto.categoria}</p>
        <p>{producto.descripcion}</p>
        <Link className="btn btn-secondary" to={`/item/${producto.id}`}>Ver más</Link>
        
    </div>
  )
}

export default Item