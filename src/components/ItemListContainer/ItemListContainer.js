import "./itemlistcontainer.css"

const itemlistcontainer = ({greeting}) =>{
    
    return(
        <div>
            <hr className="hr"/>
            <span className="texPrinci">{greeting}</span>
            <hr className="hr"/>
        </div>
    )

}

export default itemlistcontainer;