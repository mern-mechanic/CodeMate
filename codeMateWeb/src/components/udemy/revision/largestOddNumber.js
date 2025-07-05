const largestOddNumber = (num) => {
    let max = 0;

    while (num > 0) {
        let rem = num % 10;
        max = Math.max(rem, max);
        num = Math.floor(num / 10);
    }

    return max;
};

console.log(largestOddNumber(34543537));
