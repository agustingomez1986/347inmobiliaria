import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import LogoHome from '../../assets/logo-home-darkbg.png';
import LogoWord from '../../assets/logo-word-darkbg.png';
import EmailIcon from '../../assets/icons/contactemail.png';
import MobileIcon from '../../assets/icons/contactmobile.png';
import LocationIcon from '../../assets/icons/contactlocation.png';
import DoorIcon from '../../assets/icons/door.png';

import { FooterContainer, FooterMainContainer, LogoFooterContainer, LogoFooterHome, LogoFooterWord, FooterDataList, LoginContainer, LoginIcon } from './footer.styles.jsx';
import './footer.styles.scss'

// const ftp = require('ftp');
// const fs = require('fs');

// const cargarArchivo = () => {
//   console.log('Inicia carga');
//   const client = new ftp();
//   const ftpConfig = {
//     host: 'c1681797.ferozo.com',
//     user: 'c1681797',
//     password: 'webuneKA65',
//   };
  
//   const localFilePath = 'C:/Programacion/347inmobiliaria/347inmobiliaria/src/assets/about-us.jpg';
//   const remoteFilePath = 'https://www.347inmobiliaria.com/about-us.jpg';
  
//   client.on('ready', () => {
//     client.put(localFilePath, remoteFilePath, (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log('Archivo subido');
//       }
//       client._ending();
//     })
//   })
//   client.connected(ftpConfig);  
// }

const Footer = () => {
  return (
    <Fragment>
      <Outlet />
      <FooterContainer>
        <FooterMainContainer>
          <LogoFooterContainer>
            <LogoFooterHome src={LogoHome} alt='logo' />
            <LogoFooterWord src={LogoWord} alt='logo' />
          </LogoFooterContainer>
          <div>
            <FooterDataList>
              <li>Maria Teresa Cortada</li>
              <li>Martillera, Corredora Pública y Corredora Inmobiliaria</li>
              <li>Matricula Nro. 347/COCICH</li>
            </FooterDataList>
            <FooterDataList>
              <li className='footerContactLink'>
                <img className='contactIcon' src={MobileIcon} alt='Mobile icon'/>
                <a href='tel:+541151392637'>2944 615821</a>
              </li>
            </FooterDataList>
            <FooterDataList>
              <li className='footerContactLink'>
                <img className='contactIcon' src={MobileIcon} alt='Mobile icon'/>
                <a href='tel:+542944292052'>2944 292052</a>
              </li>
            </FooterDataList>
            <FooterDataList>
              <a className='footerContactLink' href='email:contacto@347inmobiliaria.com'>
                <img className='contactIcon' src={EmailIcon} alt='Email icon'/><li>contacto@347inmobiliaria.com</li>
              </a>
            </FooterDataList>
            <FooterDataList>
              <a className='footerContactLink' href=''>
                <img className='contactIcon' src={LocationIcon} alt='Location icon'/>
                <li>Lago Puelo, Chubut, Argentina</li>
              </a>
            </FooterDataList>
          </div>
        </FooterMainContainer>
        <LoginContainer>
          <LoginIcon src={DoorIcon} alt='LoginIcon' />
        </LoginContainer>
      </FooterContainer>
    </Fragment>
  )
}

export default Footer;