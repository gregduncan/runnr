import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  span {
    min-width: 85px;
    background-color: #212529;
    color: white;
    border-bottom: 1px solid #464c52;
    border-right: 1px solid #464c52;
  }
`;
