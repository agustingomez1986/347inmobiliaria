import ContactForm from '../contact-form/contact-form.component';
import './data-prop-template.styles.scss';

const DataPropTemplate = ({data}) => {

  const { address, locationX, locationY, description, size, build, cover, rooms, bedrooms, bathroom, garage, antiquity, expenses } = data[0];

  const marginZoomMapX = 0.004;
  const marginZoomMapY = 0.001;

  var locationX1 = Number(locationX) - marginZoomMapX;
  var locationX2 = Number(locationX) + marginZoomMapX;
  var locationY1 = Number(locationY) - marginZoomMapY;
  var locationY2 = Number(locationY) + marginZoomMapY;

  var iframeSrc = "https://www.openstreetmap.org/export/embed.html?bbox="+
      locationX1+"%2C"+locationY1+"%2C"+
      locationX2+"%2C"+locationY2+"&amp;layer=mapnik";

  var hrefSrc = "https://www.openstreetmap.org/#map=18/"+locationY+"/"+locationX;

  return (
    <div>
      <div className='dataPropContainer'>
        <h3 className='templateTitle'>Detalles de la propiedad:</h3>
        <h4 className="dataListTitle">INFORMACIÓN BÁSICA:</h4>
        <ul className='dataList'>
          {address ? (<li className='dataItem'>
            <h5 className='dataTitle'>Dirección:</h5>
            <h6 className='data'>{address}</h6></li>
          ) : ("")}
          {rooms ? (<li className='dataItem'>
            <h5 className='dataTitle'>Ambientes:</h5>
            <h6 className='data'>{rooms}</h6></li>
          ) : ("")}
          {bedrooms ? (<li className='dataItem'>
            <h5 className='dataTitle'>Dormitorios:</h5>
            <h6 className='data'>{bedrooms}</h6></li>
          ) : ("")}
          {bathroom ? (<li className='dataItem'>
            <h5 className='dataTitle'>Baños:</h5>
            <h6 className='data'>{bathroom}</h6></li>
          ) : ("")}
          {garage ? (<li className='dataItem'>
            <h5 className='dataTitle'>Cocheras:</h5>
            <h6 className='data'>{garage}</h6></li>
          ) : ("")}
          {expenses ? (<li className='dataItem'>
            <h5 className='dataTitle'>Expensas:</h5>
            <h6 className='data'>{expenses}</h6></li>
          ) : ("")}
          {antiquity ? (<li className='dataItem'>
            <h5 className='dataTitle'>Antigüedad:</h5>
            <h6 className='data'>{antiquity}</h6></li>
          ) : ("")}
        </ul>
        <h4 className='dataListTitle'>SUPERFICIES Y MEDIDAS:</h4>
        <ul className="dataList">
          {size ? (<li className='dataItem'><h5 className='dataTitle'>Superficie del Terreno:</h5><h6 className='data'>{size >= 10000 ? (<div>{size/10000} Ha</div>) : (<div>{size} m²</div>)}</h6></li>) : ("")}
          {build ? (<li className='dataItem'><h5 className='dataTitle'>Superficie construida:</h5><h6 className='data'>{build}</h6></li>) : ("")}
          {cover ? (<li className='dataItem'><h5 className='dataTitle'>Superficie cubierta:</h5><h6 className='data'>{cover}</h6></li>) : ("")}
        </ul>
        <h4 className='dataListTitle'>DESCRIPCIÓN:</h4>
        <ul>
          {description ? (<li className='dataItem'><h6 className='data'><span className='descSpan'>{description}</span></h6></li>) : ("")}
        </ul>
      </div>
      <div className='mapPropContainer'>
      <iframe className='mapProp' src={iframeSrc}></iframe><br/>
      <small><a href={hrefSrc}>Ver mapa más grande</a></small>
      </div>
      <div className='data-prop-form-container'>
        <form className='data-prop-form'>
          <legend className='data-prop-form-legend'>Para recibir más información de esta propiedad podes escribirnos y nos contactaremos con vos</legend>
          <ContactForm />
        </form>
      </div>
    </div>
  )
}

export default DataPropTemplate;