import { useState, useEffect } from "react"
import "./ItemCount.css"

const ItemCount = () => {

    const [contador = 0, setContador] = useState()
    
    const incrementar = () => {
        setContador(contador + 1)
    }
    const decrementar = () => {
        setContador(contador - 1)
    }
  
    useEffect(() => {
        console.log("Montaje")

        return () => {
            console.log("Desmontaje")
        }
    }, [])

    return (
        <div className="container my-5">
            
           
            <div className="botones-cantidad">
             <button className="btn btn-primary" onClick={decrementar}>-</button>
             <p className="contador">{contador}</p>
             <button className="btn btn-primary" onClick={incrementar}>+</button>
            </div>
        </div>

    )
}
export default ItemCount