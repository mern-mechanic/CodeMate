const powerOfTwo = (num) => {
    if (num === 1) {
        return true;
    } else if (num < 1) {
        return false;
    }

    const newVal = num / 2;
    return powerOfTwo(newVal);
};

console.log(powerOfTwo(144));
