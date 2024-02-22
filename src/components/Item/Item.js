
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import {Link} from "react-router-dom";


const Item = ({id, name, Image, price, stock, category}) => {

    return (
        <article className="CardItem" key={id} >
            <header className="Header">
                <h2>
                    {name}
                </h2>
            </header>
            <picture className="Img">
                <img src={Image} alt="#"/>
            </picture>
            <section>
                <p className="Info">
                    Precio:${price}
                </p>
                <p className="Info" >
                    Stock Disponible:{stock}
                    <br/>
                    Categoria : {category}
                </p>
                <div className="Detalle">
                <button className="botonContador"><Link to={`/Item/${id}`}>ver detalle</Link></button>
                </div>
            </section>
            <footer className="ItemFooter">
                <div className="Contador">
                    <ItemCount  initial={0} stock={15} onAdd={(quantity)=> console.log ('Cantidad agregada',quantity)} />
                </div>
            </footer>
        </article>
    )
}

export default Item