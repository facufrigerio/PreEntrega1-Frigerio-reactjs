import CartWidget from "./CartWidget"
import logo from "../assets/multimedia/Android Large - 1 (13).jpg"
import { Link } from "react-router-dom"
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  text-light">
            <div className="container d-flex justify-content-between align-items-center">
                <Link className="navbar-brand" to="/">
                    <div className='d-flex align-items-center'>
                        <img src={logo} alt="logo" className="kickzlogo" />
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item">
                            <Link className="nav-link text-center " to="/category/camperas">
                                Camperas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-center" to="/category/zapatillas">
                                Zapatillas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-center" to="/category/buzos">
                                Buzos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-center" to="/category/pantalones">
                                Pantalones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-center" to="/category/contactanos">
                                Contactanos
                            </Link>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar
