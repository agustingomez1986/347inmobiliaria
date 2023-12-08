import { createContext, useState } from "react";
import { DATA } from "../data";

export const FilteredDataContext = createContext({
  filteredData: DATA,
  setFilteredData: () => {},
  selectedProvince: null,
  setSelectedProvince: () => {},
  selectedLocation: null,
  setSelectedLocation: () => {},
  selectedRooms: null,
  setSelectedRooms: () => {},
  selectedType: null,
  setSelectedType: () => {},
  
});

export const FilteredDataProvider = ({ children }) => {
  const [ filteredData, setFilteredData ] = useState(DATA);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const value = {
    filteredData, setFilteredData,
    selectedProvince, setSelectedProvince,
    selectedLocation, setSelectedLocation,
    selectedRooms, setSelectedRooms,
    selectedType, setSelectedType,
  };

  return <FilteredDataContext.Provider value={value}>{ children }</FilteredDataContext.Provider>
}