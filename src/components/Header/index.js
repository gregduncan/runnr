import React from 'react';

import { Cell } from '../';
import { Container } from './styles';

export const Header = ({ unit }) => {
  const text = unit === 'miles' ? 'mph' : 'kph';
  return (
    <Container>
      <Cell>Speed ({text})</Cell>
      <Cell>Min</Cell>
      <Cell>5K</Cell>
      <Cell>10K</Cell>
      <Cell>10mile</Cell>
      <Cell>Half</Cell>
      <Cell>Full</Cell>
    </Container>
  );
};
