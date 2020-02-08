import React from 'react';

import { Container } from './styles';

export const List = ({ children }) => (
  <Container className="list-group">
    <div className="list-group-item">Time calculator</div>
    {children}
  </Container>
);
