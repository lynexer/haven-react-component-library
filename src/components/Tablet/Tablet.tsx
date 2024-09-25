import React from 'react';
import { DeviceSize, TabletProps } from './Tablet.types';
import './Tablet.css';

const Tablet: React.FC<TabletProps> = ({
    children,
    year = '2018',
    size = 'base',
    landscape = false,
    colour = 'spacegray',
    className = ''
}) => {
    const sizeMapping = {
        xs: 'scale-50',
        sm: 'scale-75',
        base: 'scale-100',
        lg: 'scale-125',
        xl: 'scale-150'
    };

    const transformDeviceSize = (size: DeviceSize) => {
        return sizeMapping[size] ?? sizeMapping.base;
    };

    const createClassList = () => {
        let defaultClasses: string = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
        let transforms: string = `${landscape ? '-rotate-90' : ''} ${transformDeviceSize(size)}`;

        return `${defaultClasses} ${transforms} ${className}`;
    };

    const createDeviceClassList = () => {
        const device: string = year === '2017' ? 'device-ipad-pro-2017' : 'device-ipad-pro';
        const deviceColour: string =
            year === '2017'
                ? `device-${colour}`
                : colour === 'spacegray'
                ? 'device-spacegray'
                : 'device-silver';

        return `device ${device} ${deviceColour}`;
    };

    return (
        <div className={createClassList()}>
            <div className={createDeviceClassList()}>
                <div className='device-frame'>
                    <div className='device-screen overflow-hidden'>
                        <div
                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                                landscape ? 'rotate-90' : ''
                            }`}
                            style={{
                                width: `${landscape ? '724' : '506'}px`,
                                height: `${landscape ? '506' : '724'}px`
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
                <div className='device-stripe'></div>
                <div className='device-header'></div>
                <div className='device-sensors'></div>
                <div className='device-btns'></div>
                <div className='device-power'></div>
                <div className='device-home'></div>
            </div>
        </div>
    );
};

export default Tablet;
