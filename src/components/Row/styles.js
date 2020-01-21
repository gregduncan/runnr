import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  cursor: pointer;
  background-color: ${props => (props.highlight ? '#b8daff' : 'white')};

  span {
    min-width: 100px;
  }
`;
