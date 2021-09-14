import React, { useState } from 'react';

export const Row = ({ children }) => {
    const [highlight, setHighlight] = useState(false);

    return (
        <div className={`row ${highlight ? 'active' : ''}`} onClick={() => setHighlight(!highlight)}>
            {children}
        </div>
    );
};
