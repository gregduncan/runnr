import dayjs from 'dayjs';

import { useSecondsCalc } from '../hooks';
import { TimeEntry } from '../types';

type Props = {
  items: TimeEntry[];
  isMiles: boolean;
};

export const Count = ({ items, isMiles }: Props) => {
  const epochs = items.map((item) => item.mins);
  let date = dayjs('1981-12-04');
  epochs.forEach((timeStamp) => {
    const seconds = useSecondsCalc(timeStamp);
    date = date.add(seconds, 'second');
  });

  return (
    <span>
      {items.length}
      {isMiles ? 'm' : 'km'} in{' '}
      {`${date.hour() > 0 ? date.format('HH:mm:ss') : date.format('mm:ss')}`}
    </span>
  );
};
