import { Fragment, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    visible: boolean;
};

export const Toggle = ({ visible, children }: Props) => {
    if (visible) {
        return <Fragment>{children}</Fragment>;
    }
    return null;
};
