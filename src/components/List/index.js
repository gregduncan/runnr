import React from 'react';

import { Container } from './styles';

export const List = ({ children }) => (
  <Container>
    <div>Time calculator</div>
    {children}
  </Container>
);
