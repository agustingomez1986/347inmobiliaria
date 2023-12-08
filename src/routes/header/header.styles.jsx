import styled from 'styled-components';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: var(--color-gris);
  display: flex;
  justify-content: center;
  padding: 10px;

  @media (min-width: 768px) {
    background-color: var(--color-coral);
    justify-content: space-between;
    padding: 0 50px 0 0;
  }
`;

export const LogoContainer = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    transform: skew(40deg);
  }
`;

export const LogoHomeImg = styled.img`
  height: 15vh;

  @media (min-width: 768px) {
    height: 12vh;
  }
`;

export const LogoWordImg = styled.img`
  width: 70%;
`;

export const ArrowContainer = styled.div`
  background-color: var(--color-gris);  
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
`;