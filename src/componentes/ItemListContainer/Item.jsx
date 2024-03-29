import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
	return (
		<Link to={`/item/${info.id}`} className="film">
			<img src={info.pictureUrl} alt="" />
      <p>{info.title}</p>
		</Link>
	);
};
export default Item;