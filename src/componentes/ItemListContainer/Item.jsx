import { Link } from "react-router-dom";

const Item = ({ item }) => {
    const { title, price, stock, pictureUrl, id } = item;
    return (
      <div className="card" style={{ width: "15rem" }}>
          <h5 className="card-title text-center">{title}</h5>
        <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
        <div className="card-body d-flex flex-column justify-content-center">
          <p className="card-text">{`${stock} Unidades Disponibles!`}</p>
          <Link className="text-center" to={`item/${id}`}>
            <button className="btn btn-primary ">Detalle</button>
          </Link>
        </div>
      </div>
    );
};
export default Item;