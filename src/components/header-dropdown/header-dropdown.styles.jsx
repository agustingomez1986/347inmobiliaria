import styled from 'styled-components';

export const HeaderDropdownContainer = styled.div`
  background-color: var(--color-gris);
  color: var(--color-coral);
  display: inline-block;
  font-family: Palatino Linotype, Georgia, 'Bell MT', serif;
  padding: 15px;
  width: 100%;
`;

export const DropdownTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 0 auto 20px;
  text-align: center;
  text-decoration: underline;
`;

export const DropdownAboutUsTitle = styled.h1`
  margin: 30px 0;
  text-align: center;
`;

export const AboutUsContainer = styled.div`
  display: inline-block;

  @media (min-width: 650px) {
    display: flex;
  }
`;

export const DropdownImage = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  width: 100%;

  @media (min-width: 650px) {
    justify-content: flex-start;
    margin-right: 20px;
    width: 45%;
  }
`;

export const DropdownAboutUs = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const DropdownText = styled.p`
  font-size: 18px;
`;