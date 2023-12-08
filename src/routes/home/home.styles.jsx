import styled from 'styled-components';

var randomBackground = Math.floor(Math.random() * 10);

export const BannerContainer = styled.div`
  align-items: center;
  justify-content: center;
  height: 90vh;
  
  &:before {
    background-image: url('https://347inmobiliaria.com/banner/background${randomBackground}.jpg');
    background-position: center;
    background-size: cover;
    content: '';
    height: 90vh;
    position: absolute;
    width: 100%;
  }
`;

export const BannerText = styled.div`
  align-items: flex-start;
  background-color: rgba(199, 208, 103, 0.3);
  display: flex;
  flex-direction: column;
  font-family: 'Cuprum', sans-serif;
  height: 100%;
  justify-content: center;
  padding: 10px;
  position: relative;
  width: 100%;
`;

export const P1 = styled.p`
  font-size: 85px;
  font-style: italic;
  text-align: center;
  width: 100%;

  @media (min-width: 425px) {
    font-size: 110px;
  }
`;

export const P2 = styled.p`
  font-size: 45px;
  text-align: center;
  width: 100%;

  @media (min-width: 425px) {
    font-size: 75px;
  }
`;

export const CarouselContainer = styled.div`
  margin: 30px auto;
  width: var(--carousel-small-screen);

  @media (min-width: 425px) {
    width: var(--carousel-medium-screen);
  }
  @media (min-width: 768px) {
    width: var(--carousel-big-screen);
  }
`;

export const ArrowContainer = styled.div`
  margin-left: 10vw;
  margin-bottom: 30px;
`;

export const NetworksContainer = styled.div`
  border-left: 15px solid var(--color-esmeralda);
  margin: 50px auto 20px;
  padding: 10px;
  width: 90vw;
`;

export const MessageNetworks = styled.p`
  font-size: 24px;
`;

export const IconsNetworks = styled.img`
  height: 50px;
  margin: 10px;
`;