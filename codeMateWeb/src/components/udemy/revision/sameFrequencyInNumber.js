const sameFrequencyInNumber = (num1, num2) => {
    const num1Frequency = {};
    const num2Frequency = {};

    while (num1 > 0) {
        const rem = num1 % 10;
        num1Frequency[rem] = (num1Frequency[rem] || 0) + 1;
        num1 = Math.floor(num1 / 10);
    }

    while (num2 > 0) {
        const rem = num2 % 10;
        num2Frequency[rem] = (num2Frequency[rem] || 0) + 1;
        num2 = Math.floor(num2 / 10);
    }

    for (let key in num1Frequency) {
        if (num1Frequency[key] !== num2Frequency[key]) return false;
    }

    return true;
};

console.log(sameFrequencyInNumber(182, 281));
