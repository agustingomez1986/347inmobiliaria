import { useContext } from "react";

import { LegalWarningContext } from './../../context/legal-warning.context'

import ArrowDown from '../../assets/icons/arrow-down.png'
import ArrowUp from '../../assets/icons/arrow-up.png'

import { ArrowIconContainer, ArrowIcon } from './arrow-dropdown.styles.jsx';

const LegalWarningArrowDropdown = () => {
  const { isLegalWarningOpen, setIsLegalWarningOpen } = useContext(LegalWarningContext);
  const toggleIsLegalWarningOpen = () => {
    setIsLegalWarningOpen(!isLegalWarningOpen)
  };

  var arrowDirection = ArrowDown;
  if (isLegalWarningOpen) {
    arrowDirection = ArrowUp;
  } else {
    arrowDirection = ArrowDown;
  }

  return (
    <ArrowIconContainer onClick={toggleIsLegalWarningOpen}>
      Aviso Legal ... <ArrowIcon src={arrowDirection} alt="arrow-direction" />
    </ArrowIconContainer>
  )
}

export default LegalWarningArrowDropdown;