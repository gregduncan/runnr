import React, { Fragment } from 'react';

type Props = {
    children?: React.ReactNode;
    visible: boolean;
};

export const Toggle = ({ visible, children }: Props) => {
    if (visible) {
        return <Fragment>{children}</Fragment>;
    } else {
        return null;
    }
};
