import React, { useState } from 'react';

type Props = {
    children: React.ReactNode;
};

export const Row = ({ children }: Props) => {
    const [highlight, setHighlight] = useState(false);

    return (
        <div className={`row ${highlight ? 'active' : ''}`} onClick={() => setHighlight(!highlight)}>
            {children}
        </div>
    );
};
