import Reac, {useState} from 'react';


const ItemCount = (props) => {
    const [count,setCount]=useState(props.initial);
    function sumar(){if(count<props.stock){
        setCount(count+1)};
    }
    function quitar(){
     if (count>=2)  { setCount(count-1)};
    }
    function finalizar(){
        alert("se agregaron " + count + " productos")
    }
    return ( <>
    <h2>comprar</h2>
    <div>
        <button onClick={quitar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
        <div>
            <button onClick={finalizar}>agregar al carrito</button>
        </div>
    </div>
    </> );
}
 
export default ItemCount;