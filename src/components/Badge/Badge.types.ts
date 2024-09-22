export type BadgeSize = 'sm' | 'base' | 'lg';
export type BadgeColour =
    | 'red'
    | 'green'
    | 'blue'
    | 'yellow'
    | 'gray'
    | 'grey'
    | 'success'
    | 'danger'
    | 'warning'
    | 'primary'
    | 'secondary';

export interface BadgeProps {
    children: React.ReactNode;
    colour?: BadgeColour;
    size?: BadgeSize;
    className?: string;
}
