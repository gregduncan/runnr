import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: (distance: string, distArr: string[]) => void;
  distance: string;
  url: string;
};

export const Button = ({ children, onClick, distance, url }: Props) => {
  const isActive = url.includes(distance);
  return (
    <button
      onClick={() => onClick(distance, url.split('|').filter(Boolean))}
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
        isActive
          ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
          : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};
