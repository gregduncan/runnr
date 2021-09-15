import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const Table = ({ children }: Props) => {
    return <div className="table">{children}</div>;
};
