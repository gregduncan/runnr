import React, { Fragment } from 'react';

export const Toggle = ({ visible, children }) => {
  if (visible) {
    return <Fragment>{children}</Fragment>;
  } else {
    return null;
  }
};
