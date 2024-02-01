import "./app.css"
import "bulma/css/bulma.css"
import Nav from "./components/Navbar/NavBar";
import Itemlistcontainer from "./components/ItemListContainer/ItemListContainer";


function App(){
  return  <div>
    <Nav/>
    <Itemlistcontainer greeting={"Bienvenidos a mi primera App React"}/>
  </div>
}

export default App;
