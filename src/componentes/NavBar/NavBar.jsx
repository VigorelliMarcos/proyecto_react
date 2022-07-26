import CartWidget from "../CartWidget/CartWidget";
import { Link} from 'react-router-dom';
 
const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    INFORMATICA MV
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}>
                        Inicio
                    </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Articulos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to={"category/placa"}>Placa de Video</Link></li>                           
                            <li><Link className="dropdown-item" to={"category/mother"}>Motherboard</Link></li>                           
                        </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="buscar" placeholder="Buscar" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <CartWidget />
                </div>
            </div>
        </nav>
     );
    }
    
    
    
export default NavBar; 


    
    