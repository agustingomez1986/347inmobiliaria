import { HeaderDropdownContainer, DropdownTitle, DropdownAboutUsTitle, AboutUsContainer, DropdownImage, DropdownAboutUs, DropdownText } from './header-dropdown.styles.jsx';

import AboutUsImage from '../../assets/about-us.jpg';

export const HeaderDropdown = () => {
  return (
    <HeaderDropdownContainer id='headerDropdown'>
      <DropdownTitle>EXPERIENCIA DE TRADICIÓN FAMILIAR</DropdownTitle>
      <DropdownAboutUsTitle>Quienes somos</DropdownAboutUsTitle>
      <AboutUsContainer>
        <DropdownImage src={AboutUsImage} alt='aboutUs' />
        <div>
          <DropdownAboutUs>Hay equipo!!! Padre e hija se unen. Grau, cuenta con 30 años de experiencia y trayectoria en el rubro. Maite, Corredora Inmobiliaria, Mat. 347/COCICH. Honestidad, responsabilidad y compromiso nos caracterizan en cada prestación de servicio inmoniliario.</DropdownAboutUs>
          <DropdownText>Contactanos para acompañarte y asesorarte en cada etapa del proceso en tu proyecto inmobiliario, para que te sea mas fácil, agradable, menos lento y costoso, logrando que tu experiencia sea satisfactoria.</DropdownText>
        </div>
      </AboutUsContainer>
    </HeaderDropdownContainer>
  )
}

export default HeaderDropdown;