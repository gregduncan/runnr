import React from 'react';

import { Span } from './styles';

export const Cell = ({ children, distance, url, text }) => {
  if (children) {
    return <Span>{children}</Span>;
  } else {
    if (url && url.length > 0 && !url.includes(distance)) {
      return null;
    }
    return <Span>{text}</Span>;
  }
};
