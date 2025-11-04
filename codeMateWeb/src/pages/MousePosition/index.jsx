import React from 'react';
import useMousePosition from './useMousePosition';

const MousePosition = () => {
    const { x, y } = useMousePosition();

    return (
        <div className="bg-amber-100 h-screen w-screen flex justify-center items-center">
            <h4 className="font-bold text-red-700">
                Mouse Position : (x: {x}, y: {y})
            </h4>
        </div>
    );
};

export default MousePosition;
