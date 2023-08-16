import { useEffect, useState } from "react"
import { getDatosItem } from "../helpers/getDatos"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const id = Number(useParams().id);
    console.log(id)

    useEffect(() => {
        getDatosItem(id)
            .then((res) => {
                setItem(res)
            })
    },[id])
  

  return (
    <div>
      {item &&  <ItemDetail item={item} /> }
    </div>
  )
}

export default ItemDetailContainer