import React from 'react';

import { Link } from './styles';

export const Button = ({ children, onClick, distance, url }) => {
  return (
    <Link onClick={() => onClick(distance)} className={`btn btn-primary ${url.includes(distance) ? 'btn-success' : ''}`}>
      {children}
    </Link>
  );
};
