import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import UCImage from '../../assets/img/under-construction.jpeg';

import './underConstruction.styles.scss';

const UnderConstruction = () => {
  return (
    <Fragment>
      <div className='underConstruction-container' style={{backgroundImage: `url(${UCImage})`}}>
        SITIO EN CONSTRUCCION
      </div>
      <Outlet />
    </Fragment>
  )
}

export default UnderConstruction;