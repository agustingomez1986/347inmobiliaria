import { Link } from "react-router-dom";

import HomeIcon from '../../assets/icons/home-icon-b.png';
import RoomsIcon from '../../assets/icons/rooms-icon-b.png';
import SurfaceIcon from '../../assets/icons/surface-icon-b.png';

import './prop-card.styles.scss'

const PropCard = ({estate}) => {
  const {name, carouselName, imageUrl, id, title, price, size, build, rooms, garage} = estate;
  
  return (
    <div className="estate-card-container">
      <Link to={`/propiedades/${id}`} className='card-container'>
        <li className='card-prop'>
          <img className='card-image' src={imageUrl} alt="Foto de propiedad"></img>
          <span className='card-name'>{name}</span>
          <span className='card-price'>{price}</span>
          <ul className="card-surface-container">
            {build ? (
              <li className="card-surface-items">
                <img className="card-surface-icons" src={HomeIcon} alt="Home icon"/>
                {build} m²
              </li>
            ) : ("")}
            {size ? (
              <li className="card-surface-items">
                <img className="card-surface-icons" src={SurfaceIcon} alt="Surface icon"/>
                {size >= 10000 ? (<div>{size/10000} Ha</div>) : (<div>{size} m²</div>)}
              </li>
            ) : ("")}
            {rooms > 0 ? (
              <li className="card-surface-items">
                <img className="card-surface-icons" src={RoomsIcon} alt="Rooms icon"/>
                {rooms} ambs
              </li>
            ) : ("")}
            {title === 'Departamentos' && garage > 0 ? (
              <li className="card-surface-items">
                Cochera: {garage}
              </li>
            ) : ("")}
          </ul>
          {id < 10 ?
            (<div>(Cod: 00{id})</div>)
          : id < 100 ?
            (<div>(Cod: 0{id})</div>) : (<div>(Cod: {id})</div>)
          }
        </li>
      </Link>
    </div>
  )
}

export default PropCard;