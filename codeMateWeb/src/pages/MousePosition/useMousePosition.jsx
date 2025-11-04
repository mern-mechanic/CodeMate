import React, { useEffect } from 'react';
import throttle from './throttle';
import debounce from './debounce';

const useMousePosition = () => {
    const throttleTime = 100;
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMovement = debounce((e) => {
            const { clientX: x, clientY: y } = e;
            setPosition({ x, y });
        }, throttleTime);

        window.addEventListener('mousemove', handleMouseMovement);

        return () => {
            window.removeEventListener('mousemove', handleMouseMovement);
        };
    }, []);

    return position;
};

export default useMousePosition;
