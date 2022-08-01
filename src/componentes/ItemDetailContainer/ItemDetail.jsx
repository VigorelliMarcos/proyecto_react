import { useState, useContect, useContext } from "react";
import ItemCount from "../ItemDetailContainer/ItemCount";
import { Link } from 'react-router-dom';
import { GContext } from "../Cart/CartContext";


const ItemDetail = ({ item }) => {
    const { addItem } = useContext(GContext);
    const [amount, setAmount] = useState(0);
    const { title, price, stock, pictureUrl, id, discount } = item;
    const onAdd = (cant) => {
      addItem(item, cant);
    };
  
    console.log(addItem);
    return (
      <div className="card" style={{ width: "20rem" }}>
        <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{`${stock} unidades disponibles!`}</p>
          <p className="card-text">{`$${
            (price * discount) / 100
          } | Tiene ${discount}% de descuento!`}</p>
        </div>
        {amount == 0 ? (
          <ItemCount stock={stock} initial={0} onAdd={onAdd} />
        ) : (
          <h1 className="text-center">Se agrego {amount} al carrito </h1>
        )}
        <div className="d-flex justify-content-center my-3">
          <Link to="/cart/">
            <button className="btn btn-warning">Ir al carrito</button>
          </Link>
        </div>
      </div>
    );
  }; 
 
export default ItemDetail;