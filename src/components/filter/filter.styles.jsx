import styled from "styled-components";

export const FilterItem = styled.li`
  color: ${props => props.selectedItem ? 'var(--color-esmeralda)' : 'black'};
`;