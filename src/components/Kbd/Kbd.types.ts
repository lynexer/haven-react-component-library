import { ReactNode } from 'react';

export interface KbdProps {
    children: ReactNode;
    mode: 'light' | 'dark';
    className?: string;
}
