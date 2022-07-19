import React, {useState,useEffect  } from "react";
import Productos from "../data/productos";
import ItemDetail from "./ItemDetail";
let promiseItem = new Promise ((resolve,reject)=>{
    setTimeout(
        () => {
    resolve(Productos)  ;
    
    },
    2000);
  });

const ItemDetailContainer = (props) => {
    
      
    let [item,setItem] = useState([]);
      useEffect(()=>{   
      promiseItem.then(
        (respuesta)=>{
          setItem(respuesta[0]);
        }
        ).catch ((errorMg)=>console.error((errorMg)))},
    [])

    return ( 
        <>
        <ItemDetail item={item}/>
       
      
        </>
    );
}
 
export default ItemDetailContainer;