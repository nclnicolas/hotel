import { Outlet, Link } from "react-router-dom";
import '../styles/NavBarStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return(
        <>
        <header>
            <nav className="navbar">
               <Link to='/' className="logo">Logo</Link>
                <input type="checkbox" id="toggler" />
                <label for='toggler'><i className="ri-menu-line"><FontAwesomeIcon icon={faBars} className='icon' /></i></label>
                <div className="menu">
                    <ul className="list">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/habitaciones'>Habitaciones</Link></li>
                        <li><Link to='/promociones'>Promociones</Link></li>
                        <li><Link to='/contacto'>Contacto</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </header>
        </>
    )
}
export default NavBar;