import React from 'react';
import moment from 'moment';

import { useSecondsCalc } from '../../hooks';

type Props = {
    mins: string[];
    integer: number;
    decimal: number;
};

export const Stat = ({ mins, integer, decimal }: Props) => {
    const date = moment('1981-12-04');

    // For the distance we have create a loop.
    for (let i = 0; i < integer; i++) {
        // Get the seconds for the distance in order.
        let seconds = useSecondsCalc(mins[i]);
        
        // Add seconds to our date.
        date.add(seconds, 's');
    }

    // If our distance has a decimal.
    if (decimal !== 0) {
        // Get the final min for our distance.
        const finalLap = mins[integer];

        // Get seconds for our final lap at this distance.
        let finalSeconds = useSecondsCalc(finalLap);

        // Figure out how what a 10th of our final lap is in seconds.
        const tenth = Math.ceil(finalSeconds / 10);

        // Get the seconds it takes to run the last bt of the distance, i.e. the 1 in 13.1 miles.
        const lastBit = decimal * tenth;

        // Add this to our existing time from earlier up.
        date.add(lastBit, 's');
    }

    return <span>{`${date.hours() > 0 ? date.format('H:mm:ss') : date.format('mm:ss')}`}</span>;
};