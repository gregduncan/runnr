import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const Header = ({ children }: Props) => (
    <div className="grid grid-flow-col auto-cols-fr bg-slate-800 text-white/90 font-semibold text-sm border-b border-slate-700">
        {children}
    </div>
);
