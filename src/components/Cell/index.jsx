import React from 'react';

export const Cell = ({ children, distance, url, text }) => {
    if (children) {
        return <span>{children}</span>;
    } else {
        if (url && url.length > 0 && !url.includes(distance)) {
            return null;
        }
        return <span>{text}</span>;
    }
};
