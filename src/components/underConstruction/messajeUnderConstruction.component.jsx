import WhatsAppLogo from '../../assets/icons/whatsapp-icon.png';
import FacebookLogo from '../../assets/icons/facebook-icon.png';
import InstagramLogo from '../../assets/icons/instagram-icon.png';

import './underConstruction.styles.scss';

const MessajeUnderConstruction = () => {
  return (
    <div className='messaje-underConstruction-container'>
      <p>La página aun se encuentra en construcción. Para recibir información sobre alguna propiedad podés comunicarte con nosotros al número <a className='links-contact' href='tel:+5491151392637'>1151392637</a> o enviarnos un mail a <a className='links-contact' href='email:contacto@347inmobiliaria.com'>contacto@347inmobiliaria.com</a></p>
      <p>También nos podés visitar en nuestras redes sociales</p>
      <div>
        <a href='https://wa.me/c/5491151392637'><img className='icons-contact' src={WhatsAppLogo} alt='WhatsApp Logo' /></a>
        <a href='https://www.facebook.com/347inmobiliaria'><img className='icons-contact' src={FacebookLogo} alt='Facebook Logo' /></a>
        <a href='https://www.instagram.com/347inmobiliaria'><img className='icons-contact' src={InstagramLogo} alt='Instagram Logo' /></a>
      </div>
    </div>
  )
}

export default MessajeUnderConstruction;