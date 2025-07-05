const findDigitsInNumber = (num) => {
    let numCopy = Math.abs(num);
    let digit = 0;

    if (num === 0) return 1;

    while (numCopy > 0) {
        numCopy = Math.floor(numCopy / 10);
        digit++;
    }

    return digit;
};

console.log(findDigitsInNumber(-1000));
