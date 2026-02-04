import dayjs from 'dayjs';

import { useSecondsCalc } from '../../hooks';

type Props = {
    items: any[];
    isMiles: boolean;
};

export const Count = ({ items, isMiles }: Props) => {
    const epochs = items.map((item) => item.mins);
    let date = dayjs('1981-12-04');
    epochs.forEach(timeStamp => {
        let seconds = useSecondsCalc(timeStamp);
        date = date.add(seconds, 'second');
    });

    return (
        <span>
            {items.length}
            {isMiles ? 'm' : 'km'} in {`${date.hour() > 0 ? date.format('HH:mm:ss') : date.format('mm:ss')}`}
        </span>
    );
};
