import './about-us.styles.scss';

const AboutUs = () => {
  return(
    <div className="aboutUs-container">
      <h1 className="aboutUs-title">NOSOTROS</h1>
      <h3 className="aboutUs-comment">EXPERIENCIA DE TRADICIÓN FAMILIAR</h3>
      <h2 className="aboutUs-subTitle">Quienes somos</h2>
      <div className="aboutUs-imagesContainer">
        <div className="aboutUs-image aboutUs-image--Maite"/>
        <div className="aboutUs-image aboutUs-image--Grau"/>
      </div>
      <p className="aboutUs-text">Hay equipo!!! Padre e hija se unen. Grau, cuenta con 30 años de experiencia y trayectoria en el rubro. Maite, Corredora Inmobiliaria, Mat. 347/COCICH. Honestidad, responsabilidad y compromiso nos caracterizan en cada prestación de servicio inmoniliario.</p>
      <p className="aboutUs-text">Contactanos para acompañarte y asesorarte en cada etapa del proceso en tu proyecto inmobiliario, para que te sea mas fácil, agradable, menos lento y costoso, logrando que tu experiencia sea satisfactoria.</p>
    </div>
  )
}

export default AboutUs;