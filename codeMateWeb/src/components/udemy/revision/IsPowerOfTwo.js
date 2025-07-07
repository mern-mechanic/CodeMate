const isPowerOfTwo = (num) => {
    if (num === 1) {
        return true;
    } else if (num < 1) {
        return false;
    }

    const newVal = num / 2;
    return isPowerOfTwo(newVal);
};

console.log(isPowerOfTwo(144));
