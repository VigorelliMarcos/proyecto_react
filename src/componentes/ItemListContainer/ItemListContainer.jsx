import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import data from "../../utils/data";
import { useParams } from "react-router-dom";
import Spinner from "../ExampleComponents/Spinner";
import {getDoc, doc, getFirestore, collection, getDocs, query, Query, where, } from "firebase/firestore"

/* const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });

  useEffect(() => {
      para un solo item 

     const db = getFirestore();
    const docRef = doc(db, "items", "1");
    getDoc(docRef).then((snapshot) => {
      const data ={id: snapshot.id, ...snapshot.data() };
      console.log(data);
    }); 

     para una carpeta de items 

    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.
        id, ...doc.data() }));
        console.log(data);
    }); 

    para items filtrados

     const db = getFirestore();
    const itemCollection = collection(db, "items");
    const filteredCollection = query(
      itemCollection,
      where("title", "!=", "Placa de Video MSI GeForce GTX 1660 SUPER 6GB GDDR6 Ventus XS OC"),
    );
    getDocs(filteredCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    }); 


    setLoading(true);
    promise.then((res) => {
      const products = res;
      if (name) {
        setItems(products.filter((product) => product.category == name));
      } else {
        setItems(products);
      }
      setLoading(false);
    });
  }, [name]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="mt-5">
        <ItemList items={items} />
      </div>
    </>
  );
};
 */

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });

  useEffect(() => {
    setLoading(true);
    promise.then((res) => {
      const products = res;
      if (name) {
        setItems(products.filter((product) => product.category == name));
      } else {
        setItems(products);
      }
      setLoading(false);
    });
  }, [name]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="mt-5">
        <ItemList items={items} />
      </div>
    </>
  );
};


export default ItemListContainer;