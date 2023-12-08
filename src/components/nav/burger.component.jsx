import { useContext } from 'react';
import { BurgerMenuContext } from '../../context/burger-menu.context';

import './burger.styles.scss';

const Burger = () => {
  const { isBurgerMenuOpen, setIsBurgerMenuOpen } = useContext(BurgerMenuContext);
  const toggleIsBurgerMenuOpen = () => {
    var burgerMenuLine1 = document.getElementById("burgerMenuLine1");
    var burgerMenuLine2 = document.getElementById("burgerMenuLine2");
    var burgerMenuLine3 = document.getElementById("burgerMenuLine3");

    burgerMenuLine1.classList.toggle('active');
    burgerMenuLine2.classList.toggle('active');
    burgerMenuLine3.classList.toggle('active');

    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div className='burgerContainer' onClick={toggleIsBurgerMenuOpen}>
      <div className="nav__burger">
        <div className="nav__burger-line-1" id='burgerMenuLine1'></div>
        <div className="nav__burger-line-2" id='burgerMenuLine2'></div>
        <div className="nav__burger-line-3" id='burgerMenuLine3'></div>
      </div>
    </div>
  )
}

export default Burger;