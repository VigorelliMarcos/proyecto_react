import React, { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import Spinner from "../ExampleComponents/Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer=()=>{
  const [loading, setLoading] = useState(false);
  const {id}= useParams();
  const [detalleEstado, setDetalleEstado]= useState ([]);

const db = getFirestore();
const docRef=doc(db, "items", `${id}`);

useEffect(()=>{
  setLoading(true);
  getDoc(docRef).then ((snapshot)=>{
  setDetalleEstado( {id: snapshot.id, ...snapshot.data()});
  setLoading(false);})
  } ,[id]);
  
  if (loading) return <Spinner/>;

return(
  <div>
      <div>
          <ItemDetail item={detalleEstado}/>
      </div>
  </div>
)
}

export default ItemDetailContainer;