import React, { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import detailedItems from "/Users/Marcos/Desktop/react/informatica_vigorelli/src/utils/details.json"
import Spinner from "../ExampleComponents/Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const promise = new Promise((res, rej) => {
    setTimeout(() => res(detailedItems), 2000);
  });

  useEffect(() => {
    setLoading(true);
    promise.then((response) => {
      const foundItem = response.filter((item) => item.id == params.id);
      setItem(foundItem[0]);
      setLoading(false);
    });
  }, []);
  return loading ? <Spinner /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;