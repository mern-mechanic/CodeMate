const getNumberFrequency = (num) => {
    let obj = {};

    while (num > 0) {
        let digit = num % 10;
        obj[digit] = (obj[digit] || 0) + 1;
        num = Math.floor(num / 10);
    }

    return obj;
};

const sameFrequencyInNumber = (num1, num2) => {
    let num1Frq = getNumberFrequency(num1);
    let num2Frq = getNumberFrequency(num2);

    for (let key in num1Frq) {
        if (num1Frq[key] !== num2Frq[key]) return false;
    }

    return true;
};

console.log(sameFrequencyInNumber(18233, 2813));

console.log(sameFrequencyInNumber(182, 281));
