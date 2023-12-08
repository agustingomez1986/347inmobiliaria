import { Fragment, useContext, useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { HeaderContext } from '../../context/header-dropdown.context';
import { BurgerMenuContext } from '../../context/burger-menu.context';
import HeaderDropdown from '../../components/header-dropdown/header-dropdown.component';
import BurgerMenu from '../../components/nav/burger-menu.component';
import LogoHome from '../../assets/logo-home-darkbg.png';
import LogoWord from '../../assets/logo-word-darkbg.png';
import HeaderArrowDropdown from '../../components/arrow-dropdown/header-arrow-dropdown.component';
import Burger from '../../components/nav/burger.component';
import Nav from '../../components/nav/nav.component';
//import { useScrollPosition } from '../../hooks/useScrollPosition';

import {  HeaderContainer, LogoContainer, LogoHomeImg, LogoWordImg, ArrowContainer } from './header.styles.jsx'
import './header.styles.scss';



const Header = () => {
  const { isHeaderOpen } = useContext(HeaderContext);
  const { isBurgerMenuOpen } = useContext(BurgerMenuContext);

  //PARA UN MENU FLOTANTE CUANDO SCROLEO
  // const scrollPosition = useScrollPosition();
  // function classNames(...classes){
  //   return classes.filter(Boolean).join(' ');
  // }

  //PARA TOMAR LA DIMENSION EN PIXELS DE LA PANTALLA
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const largeScreen = 768; //min width in px to be considered a large screen
  
  return (
    <Fragment>
      <HeaderContainer>
        <Link to={`/`} className='linkDiv'>
          <LogoContainer>
            <LogoHomeImg src={LogoHome} alt='logoHome'/>
            <LogoWordImg src={LogoWord} alt='logoWord'/>
            {/* <LogoHomeImg src={LogoHome} alt='logoHome' className={classNames(scrollPosition > 0 ? 'logoHomeScrolled' : 'logoHomeNotScrolled')}/>
            <LogoWordImg src={LogoWord} alt='logoWord' className={classNames(scrollPosition > 0 ? 'logoWordScrolled' : 'logoWordNotScrolled')}/> */}
          </LogoContainer>
        </Link>
        {width < largeScreen ? <Burger /> : <Nav />}
      </HeaderContainer>

      {width < largeScreen && isBurgerMenuOpen && <BurgerMenu />}
      
      {width < largeScreen ? (
        <ArrowContainer>
          <HeaderArrowDropdown />
        </ArrowContainer>
      ) : ("")}
      {width < largeScreen && isHeaderOpen && <HeaderDropdown />}
      <Outlet />
    </Fragment>
  )
}

export default Header;