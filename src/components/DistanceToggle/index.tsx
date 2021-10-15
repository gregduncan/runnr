import React from 'react';

import { Toggle } from '..';

type Props = {
    timeArr: any[];
    label: string;
    distance: number;
    children?: React.ReactNode;
};

export const DistanceToggle = ({ timeArr, label, distance, children }: Props) => {
    const mins = timeArr.map((item: any) => item.mins);
    if (mins.length === 0) return null;

    const distanceAchieved = mins.length >= distance;
    return (
        <Toggle visible={distanceAchieved}>
            <span className="stat">
                {label} in {children}
            </span>
        </Toggle>
    );
};
