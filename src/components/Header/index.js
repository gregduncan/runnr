import React from 'react';

import { Cell } from '../';
import { Container } from './styles';

export const Header = ({ unit, children }) => {
  const text = unit === 'miles' ? 'mph' : 'kph';
  return <Container>{children}</Container>;
};
