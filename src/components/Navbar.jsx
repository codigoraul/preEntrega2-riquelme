import { Link } from "react-router-dom"
import DisplayIcons from "../helpers/DisplayIcons"
const logoUrl = './logo-lorder.png';

const Navbar = () => {
  return (
    <div className="container-fluid d-flex" style={{backgroundColor: '#FBCB74'}}>
        <div className="container header">
            <div className="row">
                <div className="col-md-3">
                    <a href="/"> <img src={logoUrl} alt="" /></a>
                       
                </div>
                <div className="col-md-7">
                    <nav className="navbar navbar-expand-lg" >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link className="btn btn-outline-dark nav-link" to="">Inicio</Link></li>
                            <li className="nav-item"><Link className="btn btn-outline-dark nav-link" to="/productos">Productos</Link></li>
                            <li className="nav-item"><Link className="btn btn-outline-dark nav-link" to="/productos/poleras">Poleras</Link></li>
                            <li className="nav-item"><Link className="btn btn-outline-dark nav-link" to="/productos/pantalones">Pantalones</Link></li>
                            <li className="nav-item"><Link className="btn btn-outline-dark nav-link" to="/productos/deportes">Deportes</Link></li>
                            <li className="nav-item"><Link className="btn btn-outline-dark nav-link" to="/contacto">Contacto</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-2">
                    <DisplayIcons />
                    
                   <p>cantidad: 2</p>
                   
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Navbar