import styled from 'styled-components';

export const FooterContainer = styled.div`
  align-items: center;
  background-color: var(--color-gris);
  color: var(--color-coral);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    align-items: inherit;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LoginContainer = styled.div`
  align-items: flex-end;
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const FooterMainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
  padding: 20px;

  @media (min-width: 500px) {
    flex-direction: row;
  }

  @media (min-width: 700px) {
    gap: 5vw;
    justify-content: flex-start;
    padding-left: 5vw;
  }
`;

export const LogoFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const LogoFooterHome = styled.img`
  max-width: 200px;
`;

export const LogoFooterWord = styled.img`
  max-width: 200px;
`;

export const FooterDataList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const LoginIcon = styled.img`
  height: 50px;
`;