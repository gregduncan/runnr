import React, { useState } from 'react';

import { Container } from './styles';

export const Row = ({ children }) => {
  const [highlight, setHighlight] = useState();

  return (
    <Container onClick={() => setHighlight(!highlight)} highlight={highlight}>
      {children}
    </Container>
  );
};
