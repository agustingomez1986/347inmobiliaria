import styled from 'styled-components';

export const ImageSlider = styled.div`
  height: 350px;
  background-position: center;
  background-size: cover;
`;

export const ImageSlider2 = styled.div`
  height: 90px;
  background-position: center;
  background-size: cover;
`;

export const DataSlider = styled.ul`
  background-color: #fed7ab80;
  bottom: 5px;
  color: black;
  font-size: 12px;
  font-weight: bold;
  height: auto;
  padding: 10px 5px 5px;
  position: fixed;
  width: var(--carousel-small-screen);

  @media (min-width: 768px) {
    width: var(--carousel-big-screen);
  }
`;

export const DataSliderList = styled.div`
  display: flex;
`;

export const DataSliderItems = styled.li`
  align-items: flex-end;
  display: flex;
  gap: 3px;
  margin-right: 15px;
  margin-top: 5px;
`;

export const DataSliderTitle = styled.li`
  font-size: 1.3em;
`;

export const DataSliderIcons = styled.img`
  height: 20px;
`;

export const DataSliderPrice = styled.li`
  font-size: 1.3em;
  margin-top: 4px;
`;