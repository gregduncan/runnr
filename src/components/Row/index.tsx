import { ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
};

export const Row = ({ children }: Props) => {
    const [highlight, setHighlight] = useState(false);

    return (
        <div
            className={`grid grid-flow-col auto-cols-fr cursor-pointer transition-colors border-b border-slate-700/50 ${
                highlight
                    ? 'bg-purple-500/20 text-white'
                    : 'bg-slate-800/50 text-white/80 hover:bg-slate-700/50'
            }`}
            onClick={() => setHighlight(!highlight)}
        >
            {children}
        </div>
    );
};
