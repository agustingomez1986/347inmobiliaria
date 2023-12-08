import { useContext } from "react";
import { HeaderContext } from "../../context/header-dropdown.context";

import ArrowDown from '../../assets/icons/arrow-down.png'
import ArrowUp from '../../assets/icons/arrow-up.png'

import { ArrowIconContainer, ArrowIcon } from './arrow-dropdown.styles.jsx';

const HeaderArrowDropdown = () => {
  const { isHeaderOpen, setIsHeaderOpen } = useContext(HeaderContext);
  const toggleIsHeaderOpen = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    setIsHeaderOpen(!isHeaderOpen)
  };

  var arrowDirection = ArrowDown;
  if (isHeaderOpen) {
    arrowDirection = ArrowUp;
  } else {
    arrowDirection = ArrowDown;
  }

  return (
    <ArrowIconContainer onClick={toggleIsHeaderOpen}>
      <ArrowIcon src={arrowDirection} alt="arrow-direction" />
    </ArrowIconContainer>
  )
}

export default HeaderArrowDropdown;