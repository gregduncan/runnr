import { ReactNode, useState } from 'react';
import { Toggle } from './Toggle';

type Props = {
  children: ReactNode;
};

export const Detail = ({ children }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative inline-block">
      <button
        className="text-white/80 hover:text-white text-sm underline underline-offset-2 transition-colors"
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'hide' : 'details'}
      </button>
      <Toggle visible={visible}>
        <div className="absolute top-full left-0 mt-2 z-20">{children}</div>
      </Toggle>
    </div>
  );
};
