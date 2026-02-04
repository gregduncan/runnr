import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    distance?: string;
    url?: string;
    text?: any;
    highlight?: boolean;
};

export const Cell = ({ children, distance, url, text, highlight }: Props) => {
    if (children) {
        return (
            <div className="px-3 py-3 text-sm flex items-center justify-center">
                {children}
            </div>
        );
    }

    if (url && url.length > 0 && distance && !url.includes(distance)) {
        return null;
    }

    return (
        <div className={`px-3 py-3 text-sm text-center ${highlight ? 'font-semibold text-purple-300' : ''}`}>
            {text}
        </div>
    );
};
