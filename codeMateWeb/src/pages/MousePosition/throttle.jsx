const throttle = (fn, wait) => {
    let lastTime = 0;
    let timerId = null;

    return (...args) => {
        const now = Date.now();
        const remaining = wait - (now - lastTime);

        if (remaining <= 0) {
            // Enough time has passed — call the function
            fn(...args);
            lastTime = now;
        } else if (!timerId) {
            // Otherwise, schedule it for the end of the wait
            timerId = setTimeout(() => {
                fn(...args);
                lastTime = Date.now();
                timerId = null;
            }, remaining);
        }
    };
};

export default throttle;
