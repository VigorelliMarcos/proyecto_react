import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import data from "/Users/Marcos/Desktop/react/informatica_vigorelli/src/utils/data.json";
import { useParams } from "react-router-dom";
import Spinner from "../ExampleComponents/Spinner";

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