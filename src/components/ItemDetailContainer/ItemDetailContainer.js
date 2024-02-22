import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "../Item/Item"
import { getProductById } from "../../asyncMock"

const ItemDetailContainer = ()=>{
    const [products, setProducts] = useState(null)

    const { ItemId} = useParams()

    useEffect(() => { 
        getProductById(ItemId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })

}, [ItemId])

return(
    <div className="ItemDetailContainer">

        <Item {...products} />
    </div>
    )

}

export default ItemDetailContainer

