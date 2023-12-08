import { Link } from 'react-router-dom';

import './burger-menu.styles.scss'

const BurgerMenu = () => {
  return (
    <div className="burgerMenuContainer">
      <Link to='/' className="burgerMenuItem">INICIO</Link>
      <Link to='/servicios' className="burgerMenuItem">SERVICIOS</Link>
      <Link to='/propiedades' className="burgerMenuItem">PROPIEDADES</Link>
      <Link to='/nosotros' className="burgerMenuItem">NOSOTROS</Link>
      <Link to='/contacto' className="burgerMenuItem">CONTACTO</Link>
    </div>
  )
}

export default BurgerMenu;