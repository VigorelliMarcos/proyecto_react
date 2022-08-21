import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../ExampleComponents/Spinner";
import { getFirestore, collection, getDocs, query, where, } from "firebase/firestore"


const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  const itemsCollection= collection(db, "items");
  const coleccionFiltrada= query(itemsCollection,
    where("category", "==", `${name}`))

  useEffect(() => {
    setLoading(true);    
    if (name)
      {getDocs(coleccionFiltrada).then ((snapshot)=>{
      setItems( snapshot.docs.map (doc=>({id:doc.id, ...doc.data()})));
      setLoading(false)})
    }
    else getDocs(itemsCollection).then ((snapshot) => {
      setItems (snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  }, [name]);

  if (loading) return <Spinner />;  

  return ( 
    <div className="mt-5">
      <ItemList items={items}/>
    </div>   
  );
};
export default ItemListContainer;