import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
const Nav = ()=>{
    return( <nav className="navBar">
                    <h1 className="tituloPrincipal">Hyperion</h1>
                    <ul className="lista">
                    <button className="subLista">Remeras</button>
                    <button className="subLista">Pantalones</button>
                    <button className="subLista">Camisas</button>
                    <button className="subLista">Acesorios</button>
                </ul>
                <CartWidget/>
            </nav>
    )
};

export default Nav;