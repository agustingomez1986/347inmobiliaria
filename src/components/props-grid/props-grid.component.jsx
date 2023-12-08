import { useContext, useMemo } from 'react';

import PropCard from '../../components/prop-card/prop-card.component';
import Filter from '../filter/filter.component';
import { DATA } from '../../data';
import { FilteredDataContext } from '../../context/filtered-data.context';

import './props-grid.styles.scss'

const PropsGrid = () => {
  const { filteredData, setFilteredData, selectedProvince, selectedLocation, selectedRooms, selectedType } = useContext(FilteredDataContext);
  
  useMemo(() => {
    let results = DATA;
    if (selectedProvince) {
      results = results.filter((item) => item.province === selectedProvince);
    }
    if (selectedLocation) {
      results = results.filter((item) => item.location === selectedLocation);
    }
    if (selectedRooms) {
      results = results.filter((item) => item.rooms === selectedRooms);
    }
    if (selectedType) {
      results = results.filter((item) => item.title === selectedType);
    }

    

    return setFilteredData(results);
  }, [DATA, selectedProvince, selectedLocation, selectedRooms, selectedType]);

  return (
    <div>
      <h1 className='props-title'>PROPIEDADES</h1>
      <Filter />
      <div className='props-container'>
        {filteredData.map((estates) => (
          <PropCard estate={estates} key={estates.id}/>
        ))}
      </div>
    </div>
  )
}

export default PropsGrid;