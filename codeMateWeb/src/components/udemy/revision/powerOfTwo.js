const powerOfTwo = (num) => {
    if (num < 2) return 2;

    return 2 * powerOfTwo(num - 1);
};

console.log(powerOfTwo(4));

// 2*2*2*2
