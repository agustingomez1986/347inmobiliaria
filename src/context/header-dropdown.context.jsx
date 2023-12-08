import { createContext, useState } from "react";

export const HeaderContext = createContext({
  isHeaderOpen: false,
  setIsHeaderOpen: () => {},
});

export const HeaderProvider = ({ children }) => {
  const [ isHeaderOpen, setIsHeaderOpen ] = useState(false);
  const value = { isHeaderOpen, setIsHeaderOpen };

  return <HeaderContext.Provider value={value}>{ children }</HeaderContext.Provider>
}