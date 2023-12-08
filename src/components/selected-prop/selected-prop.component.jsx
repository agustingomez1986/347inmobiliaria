import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import Slider from "react-slick";

import { DATA } from '../../data.js'
import DataPropTemplate from '../data-prop-templates/data-prop-template.component.jsx';

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { ImageSlider } from '../carousel/carousel.styles.jsx';
import { CarouselContainer } from '../../routes/home/home.styles.jsx';
import './selected-prop.styles.scss';
// import { TemplateCasaChacra, TemplateDepartamento, TemplateDeposito, TemplateTerreno } from '../../components/data-prop-templates/templates.component.jsx';

const SelectedProp = () => {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const { idPage } = useParams();
  // const filteredData = DATA.filter((estates) => estates.id == idPage);
  const selectedPropData = DATA.filter((estates) => estates.id == idPage);
  
  // const { id, title, name, address, images, description, price, size, build, cover, rooms, bedrooms, bathroom, storage, garage, floors, orientation, antiquity, expenses, apartmentsPerFloor, arranged } = filteredData[0];
  const { id, name, price, images } = selectedPropData[0];

  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'ondemand',
    speed: 1000,
  };

  return (
    <div className='selectedEstateContainer'>
      <h2 className='title'>{name}</h2>
      <h3 className='price'>{price}</h3>
      <CarouselContainer style={{width: '90%'}}>
        <Slider {...settings}>
          {images.map((images) => (
            <div key={id} className='Container'>
              <ImageSlider style={{backgroundImage: `url(${images})`, backgroundSize:'contain', backgroundRepeat: 'no-repeat'}} />
            </div>
          ))}
        </Slider>
      </CarouselContainer>
      <div>
        <DataPropTemplate data={selectedPropData} />
      </div>
    </div>
  )
}

export default SelectedProp;