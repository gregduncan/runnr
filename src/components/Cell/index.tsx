import React from 'react';

type Props = {
    children?: React.ReactNode;
    distance?: string;
    url?: string;
    text?: any;
};

export const Cell = ({ children, distance, url, text }: Props) => {
    if (children) {
        return <span>{children}</span>;
    } else {
        if (url && url.length > 0 && distance && !url.includes(distance)) {
            return null;
        }
        return <span>{text}</span>;
    }
};
