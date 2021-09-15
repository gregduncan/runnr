import React from 'react';

export const Button = ({ children, onClick, distance, url }) => {
    return (
        <button onClick={() => onClick(distance, url)} className={`${url.includes(distance) ? 'active' : ''}`}>
            {children}
        </button>
    );
};
