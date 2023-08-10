import CartWidget from "./CartWidget"
import logo from "../assets/multimedia/Android Large - 1 (13).jpg"
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  text-light">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand" href="/">
                    <div className='d-flex align-items-center'>
                        <img src={logo} alt="logo" className="kickzlogo" />
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item">
                            <a className="nav-link text-center " href="/#">
                                Camperas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" href="/#">
                                Zapatillas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" href="/#">
                                Buzos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" href="/#">
                                Pantalones
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" href="/#">
                                Contactanos
                            </a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar
