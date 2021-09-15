import React from 'react';

type Props = {
    children: React.ReactNode;
    onClick: (distance: string, url: any) => void;
    distance: string;
    url: string;
};

export const Button = ({ children, onClick, distance, url }: Props) => {
    return (
        <button onClick={() => onClick(distance, url)} className={`${url.includes(distance) ? 'active' : ''}`}>
            {children}
        </button>
    );
};
