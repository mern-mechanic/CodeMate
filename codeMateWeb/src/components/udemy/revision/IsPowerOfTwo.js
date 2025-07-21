const isPowerOfTwo = (num) => {
    if (num === 1) return true;
    if (num < 1 || num % 2 !== 0) return false;

    return isPowerOfTwo(num / 2);
};

console.log(isPowerOfTwo(144)); // false
console.log(isPowerOfTwo(128)); // true
