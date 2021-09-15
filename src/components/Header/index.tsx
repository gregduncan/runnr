import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const Header = ({ children }: Props) => <header>{children}</header>;
