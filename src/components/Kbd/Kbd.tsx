import React from 'react';
import { KbdProps } from './Kbd.types';
import { match } from 'ts-pattern';

const Kbd: React.FC<KbdProps> = ({ children, mode = 'dark', className = '' }) => {
    const getCssColours = (): string => {
        return match(mode)
            .returnType<string>()
            .with(
                'light',
                () =>
                    'bg-white border-gray-200 text-gray-800 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)]'
            )
            .otherwise(
                () =>
                    'bg-neutral-900 border-neutral-700 text-neutral-200 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)]'
            );
    };

    return (
        <kbd
            className={`min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 border font-mono text-sm rounded-md ${className} ${getCssColours()}`}
        >
            {children}
        </kbd>
    );
};

export default Kbd;
