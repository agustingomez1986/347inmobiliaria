import { useEffect, Fragment, useContext } from 'react';
import CarouselHome from '../../components/carousel/carousel.component'

import { LegalWarningContext } from '../../context/legal-warning.context';
import LegalWarning from '../../components/legal-warning/legal-warning.component';
import LegalWarningArrowDropdown from '../../components/arrow-dropdown/legal-warning-arrow-dropdown.component'
import WhatsAppLogo from '../../assets/icons/whatsapp-icon.png';
import FacebookLogo from '../../assets/icons/facebook-icon.png';
import InstagramLogo from '../../assets/icons/instagram-icon.png';

import { BannerContainer, BannerText, P1, P2, CarouselContainer, ArrowContainer, NetworksContainer, MessageNetworks, IconsNetworks } from './home.styles.jsx'

const Home = () => {
  const { isLegalWarningOpen } = useContext(LegalWarningContext)

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <Fragment>
      <BannerContainer>
        <BannerText>
          <P1>PASION</P1>
          <P2>POR LO QUE HACEMOS</P2>
        </BannerText>
      </BannerContainer>
      <CarouselContainer>
        <CarouselHome />
      </CarouselContainer>
      <ArrowContainer>
        <LegalWarningArrowDropdown />
      </ArrowContainer>
      {isLegalWarningOpen && <LegalWarning />}
      <NetworksContainer>
        <MessageNetworks>También nos podés visitar en nuestras redes sociales</MessageNetworks>
        <div>
          <a href='https://wa.me/c/5491151392637'><IconsNetworks src={WhatsAppLogo} alt='WhatsApp Logo' /></a>
          <a href='https://www.facebook.com/347inmobiliaria'><IconsNetworks src={FacebookLogo} alt='Facebook Logo' /></a>
          <a href='https://www.instagram.com/347inmobiliaria'><IconsNetworks src={InstagramLogo} alt='Instagram Logo' /></a>
        </div>
      </NetworksContainer>
    </Fragment>
  )
}

export default Home;