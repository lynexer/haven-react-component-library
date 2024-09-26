export type SpinnerSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type SpinnerColour =
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
    | 'secondary'
    | 'pink'
    | 'purple';

export interface SpinnerProps {
    size?: SpinnerSize;
    colour?: SpinnerColour;
}
