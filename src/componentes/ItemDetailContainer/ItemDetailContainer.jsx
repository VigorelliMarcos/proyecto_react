import React, { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import Spinner from "../ExampleComponents/Spinner";
import detailedItems from "../../utils/details.json"

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