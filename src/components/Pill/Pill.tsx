import React from 'react';
import { PillProps } from './Pill.types';
import { match } from 'ts-pattern';

const Pill: React.FC<PillProps> = ({
    children,
    colour = 'grey',
    size = 'base',
    className = ''
}) => {
    const getCssColours = (): string => {
        return match(colour)
            .returnType<string>()
            .with('blue', 'primary', () => 'bg-blue-500')
            .with('red', 'danger', () => 'bg-red-500')
            .with('green', 'success', () => 'bg-green-500')
            .with('amber', 'yellow', 'warning', () => 'bg-amber-500')
            .with('pink', () => 'bg-pink-500')
            .with('indigo', () => 'bg-indigo-500')
            .with('purple', () => 'bg-purple-500')
            .with('teal', () => 'bg-teal-500')
            .with('cyan', () => 'bg-cyan-500')
            .otherwise(() => 'bg-gray-900');
    };

    const getCssPadding = (): string => {
        return match(size)
            .returnType<string>()
            .with('sm', () => 'px-2 py-1')
            .with('lg', () => 'px-4 py-2')
            .otherwise(() => 'py-1.5 px-3');
    };

    return (
        <div
            className={`relative grid select-none items-center whitespace-nowrap rounded-full text-xs font-bold uppercase text-white ${className} ${getCssPadding()} ${getCssColours()}`}
        >
            <span>{children}</span>
        </div>
    );
};

export default Pill;
