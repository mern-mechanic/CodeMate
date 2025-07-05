const recursiveRange = (range) => {
    if (range < 1) return 0;

    return range + recursiveRange(range - 1);
};

console.log(recursiveRange(10));
