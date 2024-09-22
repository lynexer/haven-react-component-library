import { ReactNode } from "react";

export type DeviceSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type IpadColour = 'silver' | 'spacegray' | 'gold' | 'rosegold';
export type IpadYear = '2018' | '2017';

export interface TabletProps {
    children?: ReactNode;
    year?: IpadYear;
    size?: DeviceSize;
    landscape?: boolean;
    colour?: IpadColour;
    className?: string;
}
