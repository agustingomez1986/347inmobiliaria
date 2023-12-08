import { createContext, useState } from "react";

export const BurgerMenuContext = createContext({
  isBurgerMenuOpen: false,
  setIsBurgerMenuOpen: () => {},
});

export const BurgerMenuProvider = ({ children }) => {
  const [ isBurgerMenuOpen, setIsBurgerMenuOpen ] = useState(false);
  const value = { isBurgerMenuOpen, setIsBurgerMenuOpen };

  return <BurgerMenuContext.Provider value={value}>{ children }</BurgerMenuContext.Provider>
}