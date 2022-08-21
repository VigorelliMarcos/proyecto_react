import { createContext, useState } from "react";
import {
  addDoc,
  doc, 
  getFirestore, 
  collection, 
  updateDoc, 
  writeBatch
} from "firebase/firestore"
export const GContext = createContext();

const CartContext = ({ children }) => {
  const [itemsCarrito, setItemCarrito] = useState([]);

  const sendOrder = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: itemsCarrito,
    };
    addDoc(orderCollection, order)
      .then((res) => console.log(res.id))
      .catch((err) => console.log("error", err));
  };

  const addItem = (item, quantity) => {
    const newItem = isInCart(item);
    if (newItem) {
      quantity = quantity + newItem.quantity;
      setItemCarrito(
        itemsCarrito.splice(
          itemsCarrito.findIndex((element) => element.item.id === item.id),
          1
        )
      );
    }
    setItemCarrito([...itemsCarrito, { item, quantity }]);
  };

  const isInCart = (item) => {
    return itemsCarrito.find((element) => element.item === item);
  };

  const clear = () => {
    setItemCarrito([]);
  };
  const removeItem = (itemId) => {
    setItemCarrito(itemsCarrito.filter((element) => element.item.id !== itemId));
  };

  const total = () => {
    return itemsCarrito.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity,
      0
    );
  };
  return <GContext.Provider value={{ itemsCarrito, addItem, removeItem, clear, total, sendOrder }}>{children}</GContext.Provider>;
};

export default CartContext;