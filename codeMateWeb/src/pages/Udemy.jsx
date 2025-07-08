import React, { useEffect, useState } from 'react';
import '../components/udemy/playground';
// import '../components/udemy/reverse';

const Udemy = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    useEffect(() => {
        handleStart();
    }, []);

    const hours = Math.floor(time / 3600)
        .toString()
        .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
        .toString()
        .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                <h1 className="text-white text-[30px] p-[80px]">Playground</h1>
            </div>
        </div>
    );
};

export default Udemy;
