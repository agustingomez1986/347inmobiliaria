import { createContext, useState } from "react";

export const DataToSendContext = createContext({
  contactDataToSend: '',
  setContactDataToSend: () => {},
});

export const DataToSendProvider = ({children}) => {
  const [ contactDataToSend , setContactDataToSend ] = useState({
    contactName: '',
    contactEmail: '',
    contactPhoneNumber: '',
    contactMessage: '',
    contactPropId: '',
    contactError: null,
    contactSent: false,
  });
  const value = { contactDataToSend, setContactDataToSend};
  return <DataToSendContext.Provider value={value}>{children}</DataToSendContext.Provider>
}