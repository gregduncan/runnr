import React, { useState } from 'react';
import { Toggle } from '..';

type Props = {
    children: React.ReactNode;
};

export const Detail = ({ children }: Props) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <button onClick={() => setVisible(!visible)}>
                <span className="material-icons">add</span>
            </button>
            <Toggle visible={visible}>{children}</Toggle>
        </>
    );
};
