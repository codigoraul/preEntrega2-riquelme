import Item from "./Item"


const ItemList = ({productos, titulo}) => {
    console.log(productos)
  return (
    <div>
        <div className="container mt-5">
            <h2 className="text-center tcapital">{titulo}</h2>
            <div className="row">
             
                { productos.map((producto) => 
                  
                        <Item producto={producto} key={producto.id} /> 
                   
                 )}
                
            </div>
  
        </div>
    </div>
  )
}

export default ItemList