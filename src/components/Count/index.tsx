import React from 'react';
import moment from 'moment';

import { useSecondsCalc } from '../../hooks';

type Props = {
    items: any[];
    isMiles: Boolean;
};

export const Count = ({ items, isMiles }: Props) => {
    const epochs = items.map((item) => item.mins);
    const date = moment('1981-12-04');
    epochs.forEach(timeStamp => {
        let seconds = useSecondsCalc(timeStamp)
        date.add(seconds, 's');
    })

    return (
        <span>
            {items.length}
            {isMiles ? 'm' : 'km'} in {`${date.hours() > 0 ? date.format('HH:mm:ss') : date.format('mm:ss')}`}
        </span>
    );
};
