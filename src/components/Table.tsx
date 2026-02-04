import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Table = ({ children }: Props) => {
  return <div className="overflow-hidden">{children}</div>;
};
