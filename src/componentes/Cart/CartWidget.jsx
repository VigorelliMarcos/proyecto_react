import React from "react";
import { useCartContext } from "./CartContext";
import {Link} from 'react-router-dom';

const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<>
        <Link className="nav-link active" aria-current="page" to={"/cart"}>
			<i className="bi bi-cart3"></i>
			<span>{totalProducts() || ""}</span>
        </Link>
		</>
	);
};
     
export default CartWidget;