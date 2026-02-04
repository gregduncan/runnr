import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  visible: boolean;
};

export const Toggle = ({ visible, children }: Props) => {
  if (visible) {
    return <>{children}</>;
  }
  return null;
};
