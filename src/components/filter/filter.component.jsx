import { useState, useContext } from 'react';

import { FilteredDataContext } from '../../context/filtered-data.context';
import ArrowDown from '../../assets/icons/arrow-down.png'
import ArrowUp from '../../assets/icons/arrow-up.png' 

import { ArrowIconContainer, ArrowIcon } from '../arrow-dropdown/arrow-dropdown.styles';
import './filter.styles.scss';
import { FilterItem } from './filter.styles';

const Filter = () => {
  const [ isFilterOpen , setIsFilterOpen ] = useState(false);
  const { filteredData , selectedProvince, setSelectedProvince, selectedLocation, setSelectedLocation, selectedRooms, setSelectedRooms, selectedType, setSelectedType } = useContext(FilteredDataContext);

  const toggleIsHeaderOpen = () => {
    setIsFilterOpen(!isFilterOpen)
  };

  var arrowDirection = ArrowDown;
  if (isFilterOpen) {
    arrowDirection = ArrowUp;
  } else {
    arrowDirection = ArrowDown;
  }

  const uniqueProvince = Array.from(new Set(filteredData.map((data) => data.province))).sort();
  const uniqueLocation = Array.from(new Set(filteredData.map((data) => data.location))).sort();
  const uniqueRooms = Array.from(new Set(filteredData.map((data) => data.rooms).filter((province) => {
    return (province !== undefined && province !== "")}))).sort();
  const uniqueType = Array.from(new Set(filteredData.map((data) => data.title))).sort();

  return (
    <div>
      <div className='filter-title-container'>
        <h3 className='filter-title'>FILTRO</h3>
        <ArrowIconContainer onClick={toggleIsHeaderOpen}>
          <ArrowIcon src={arrowDirection} alt="arrow-direction" />
        </ArrowIconContainer>
      </div>
      {isFilterOpen &&
        <ul className='filter-container'>
          <FilterItem className='filter-item' key='province' selectedItem={selectedProvince}>
            <label htmlFor='province'>Pronvincia: </label>
            <select 
              id='province'
              name='province'
              value={selectedProvince}
              onChange={e => setSelectedProvince(e.target.value)}>

              <option value="">Todas</option>
              {uniqueProvince.map((province) => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          </FilterItem>
          <FilterItem className='filter-item' key='location' selectedItem={selectedLocation}>
            <label htmlFor='location'>Localidad: </label>
            <select
              id='location'
              name='location'
              value={selectedLocation}
              onChange={e => setSelectedLocation(e.target.value)}>

              <option value="">Todas</option>
              {uniqueLocation.map((location) => (
                <option>{location}</option>
              ))}
            </select>
          </FilterItem>
          <FilterItem className='filter-item' key='romms' selectedItem={selectedRooms}>
            <label htmlFor='rooms'>Habitaciones: </label>
            <select
              id='rooms'
              name='rooms'
              value={selectedRooms}
              onChange={e => setSelectedRooms(e.target.value)}>
            <option value="">Todas</option>
              {uniqueRooms.map((rooms) => (
                <option>{rooms}</option>
              ))}
            </select>
          </FilterItem>
          <FilterItem className='filter-item' key='type' selectedItem={selectedType}>
            <label htmlFor='type'>Tipo: </label>
            <select
              id='type'
              name='type'
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}>
            <option value="">Todas</option>
              {uniqueType.map((type) => (
                <option>{type}</option>
              ))}
            </select>
          </FilterItem>
          {/* <li className='filter-item' key='size'>
            <label htmlFor='size'>Superficie: entre </label>
            <input name='size1'></input> y <input name='size2'></input>
          </li> */}
        </ul>
      }
    </div>
  );
}

export default Filter;