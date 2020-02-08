import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  cursor: pointer;

  span {
    min-width: 85px;
    background-color: ${props => (props.highlight ? '#b8daff' : 'white')};
  }
`;
