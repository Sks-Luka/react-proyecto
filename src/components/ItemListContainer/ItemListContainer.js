import { useState, useEffect } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import "./itemlistContainer.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemlistContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    
    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts


            asyncFunc(categoryId)
            .then(response  => { 
                setProducts(response)
            })
            .catch(error => {
                console.error(error) 
            })
    }, [categoryId])
    
    return(
        <div className="Container">
            <hr className="hr"/>
            <span className="texPrinci">Bienvenidos a tu tienda Pc</span>
            <hr className="hr"/>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemlistContainer; 