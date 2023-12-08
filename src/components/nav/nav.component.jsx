import { Link } from "react-router-dom";

import './nav.styles.scss';

const Nav = () => {
  return(
    <div className="navLinks">
      <Link to='/' className="link">inicio</Link>
      <Link to='/servicios' className="link">SERVICIOS</Link>
      <Link to='/propiedades' className="link">PROPIEDADES</Link>
      <Link to='/nosotros' className="link">NOSOTROS</Link>
      <Link to='/contacto' className="link">CONTACTO</Link>
    </div>
  );
}

export default Nav;