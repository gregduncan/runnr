import { ReactNode } from 'react';
import { Toggle } from '..';

type Props = {
    timeArr: any[];
    label: string;
    distance: number;
    children?: ReactNode;
};

export const DistanceToggle = ({ timeArr, label, distance, children }: Props) => {
    const mins = timeArr.map((item: any) => item.mins);
    if (mins.length === 0) return null;

    const distanceAchieved = mins.length >= distance;
    return (
        <Toggle visible={distanceAchieved}>
            <span className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                <span className="font-medium">{label}</span>
                <span className="text-purple-200">{children}</span>
            </span>
        </Toggle>
    );
};
