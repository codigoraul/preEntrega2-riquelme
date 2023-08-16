import { useState } from "react"
import ItemCount from "./ItemCount"


const ItemDetail = ( {item} ) => {
     
  const[cantidad, setCantidad] = useState(1)
   
  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleAgregar = () => {
    console.log({...item, quantity: cantidad})
  }

  return (
    
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-4">
          <h2>{item.titulo}</h2>
          <img src={item.imagen} alt="" />
        </div>
        <div className="col-md-6 pt-5 mt-5 align-items-center">
           <h3><b>Precio</b>{item.precio}</h3>
            <p>{item.descripcion}</p>
            <ItemCount cantidad = {cantidad}
             handleSumar={handleSumar} handleRestar={handleRestar}
              item={item} handleAgregar={handleAgregar}/>
        </div>
        </div>
      </div>
    
  )
}

export default ItemDetail