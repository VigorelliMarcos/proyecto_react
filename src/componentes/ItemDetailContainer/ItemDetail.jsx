import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Cart/CartContext";
import ItemCount from "./ItemCount";



export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<div className="card" style={{ width: "20rem" }}>

				<img className="car-img-top" src={data.pictureUrl} alt="Card image cap" />
				<div className="card-body d-flex flex-column justify-content-center">
					<h5 className="card-title">{data.title}</h5>
          <p className="card-text">{`${data.stock} unidades disponibles!`}</p>
          <p className="card-text">PRECIO: $ {data.price}</p>
					{goToCart ? (
						<Link to="/cart/" className="d-flex justify-content-center my-3">
              <button className="btn btn-warning">Ir al carrito</button>
            </Link>
					) : (
						<ItemCount initial={0} stock={data.stock} onAdd={onAdd} />
					)}
				</div>

		</div>
	);
};
 
export default ItemDetail;