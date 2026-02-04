import dayjs from 'dayjs';

import { useSecondsCalc } from '../../hooks';

type Props = {
    mins: string[];
    integer: number;
    decimal: number;
};

export const Stat = ({ mins, integer, decimal }: Props) => {
    let date = dayjs('1981-12-04');

    for (let i = 0; i < integer; i++) {
        let seconds = useSecondsCalc(mins[i]);
        date = date.add(seconds, 'second');
    }

    if (decimal !== 0) {
        const finalLap = mins[integer];
        let finalSeconds = useSecondsCalc(finalLap);
        const tenth = Math.ceil(finalSeconds / 10);
        const lastBit = decimal * tenth;
        date = date.add(lastBit, 'second');
    }

    return <span>{`${date.hour() > 0 ? date.format('H:mm:ss') : date.format('mm:ss')}`}</span>;
};