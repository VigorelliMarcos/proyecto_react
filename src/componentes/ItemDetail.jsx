import React from "react";
import ItemCount from "./ItemCount";
const ItemDetail = ({item}) => {
    return ( 
        <>
        <div class="card cartera "style={{width:780}} key={item.id}>
                        <p class="text-center h3 card-title cartera">{item.producto}</p>
                       
                        <img class="card-img cartera" style={{height:400}} src={item.img} alt="" />
                        <p class="cartera">{item.category}</p>
                        <p class="h2 cartera">${item.price}</p>
                      
      
                        <ItemCount class="cartera" stock={10} initial={1}/>
                       
                    </div>
                
                   
        </>
        
     );
}
 
export default ItemDetail;