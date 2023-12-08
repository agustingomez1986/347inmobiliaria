import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { DATA } from '../../data.js'
import HomeIcon from '../../assets/icons/home-icon-b.png';
import RoomsIcon from '../../assets/icons/rooms-icon-b.png';
import SurfaceIcon from '../../assets/icons/surface-icon-b.png';

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { ImageSlider, ImageSlider2, DataSlider, DataSliderList, DataSliderItems, DataSliderTitle, DataSliderPrice, DataSliderIcons } from './carousel.styles.jsx'

const CarouselHome = () => {
  const [ nav1, setNav1 ] = useState();
  const [ nav2, setNav2 ] = useState();

  var settings = {
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    lazyLoad: 'ondemand',
    speed: 1000,
  };

  var settings2 = {
    focusOnSelect: true,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: true,
  };

  return (
    <div>
      <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {DATA.map((estates) => (
          <div key={estates.id} >
            <Link to={`propiedades/${estates.id}`}>
              <ImageSlider style={{backgroundImage: `url('${estates.imageUrl}')`}} />
            </Link>
            <DataSlider>
              <DataSliderList>
                <DataSliderTitle>
                  {estates.carouselName ? (
                    estates.id < 10 ?
                      (<div>(00{estates.id}) {estates.carouselName}</div>)
                    : estates.id < 100 ?
                      (<div>(0{estates.id}) {estates.carouselName}</div>) : (<div>({estates.id}) {estates.carouselName}</div>)
                  ) : (<div></div>)}
                </DataSliderTitle>
              </DataSliderList>
              <DataSliderList>
                {estates.build ? (
                  <DataSliderItems>
                    {estates.build} m²
                    <DataSliderIcons src={HomeIcon} alt="Home icon"/>
                  </DataSliderItems>
                ) : (<div></div>)}
                {estates.size ? (
                  <DataSliderItems>
                    {estates.size >= 10000 ? 
                      (<div>{estates.size/10000} Ha</div>)
                      : (<div>{estates.size} m²</div>)
                    }
                    <DataSliderIcons src={SurfaceIcon} alt="Surface icon"/>
                  </DataSliderItems>
                ) : (<div></div>)}
                {estates.rooms > 0 ? (
                  <DataSliderItems>
                    {estates.rooms} ambs
                    <DataSliderIcons src={RoomsIcon} alt="Rooms icon"/>
                  </DataSliderItems>
                ) : (<div></div>)}
                {estates.title === 'Departamentos' && estates.garage > 0 ? (
                  <DataSliderItems>
                    Cochera: {estates.garage}
                  </DataSliderItems>
                ) : (<div></div>)}
              </DataSliderList>
              <DataSliderList>
                <DataSliderPrice>
                  {estates.price}
                </DataSliderPrice>
              </DataSliderList>
            </DataSlider>
          </div>
        ))}
      </Slider>
      <Slider {...settings2} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
        {DATA.map((estates) => (
          <div key={estates.id}>
              <ImageSlider2 style={{backgroundImage: `url('${estates.imageUrl}')`}} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CarouselHome;