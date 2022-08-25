import React, { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="input-group input-spinner mb-3 d-flex justify-content-center">
			<button disabled={count <= 1} onClick={decrease} className="btn btn-icon btn-primary">
				-
			</button>
      
      <span className="border-primary text-center">{count}</span>
			<button disabled={count >= stock} onClick={increase} className="btn btn-icon btn-primary">
				+
			</button>
			<div className="d-flex justify-content-center">
				<button disabled={stock <= 0} onClick={() => onAdd(count)} className="btn btn-info">
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

 
export default ItemCount;