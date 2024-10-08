import { ReactNode } from 'react';

export type PillSize = 'sm' | 'base' | 'lg';
export type PillColour =
    | 'blue'
    | 'red'
    | 'green'
    | 'amber'
    | 'pink'
    | 'indigo'
    | 'purple'
    | 'teal'
    | 'cyan'
    | 'danger'
    | 'success'
    | 'warning'
    | 'primary'
    | 'secondary'
    | 'gray'
    | 'grey'
    | 'yellow';

export interface PillProps {
    children: ReactNode;
    colour?: PillColour;
    size?: PillSize;
    className?: string;
}
