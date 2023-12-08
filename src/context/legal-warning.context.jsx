import { createContext, useState } from "react";

export const LegalWarningContext = createContext({
  isLegalWarningOpen: false,
  setIsLegalWarningOpen: () => {},
});

export const LegalWarningProvider = ({children}) => {
  const [ isLegalWarningOpen, setIsLegalWarningOpen ] = useState(false);
  const value = { isLegalWarningOpen, setIsLegalWarningOpen };

  return <LegalWarningContext.Provider value={value}>{children}</LegalWarningContext.Provider>
}