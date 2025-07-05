const calculateMaxDifference = (arr) => {
    let start = 0;
    let iterator = 0;

    let max = -Infinity;

    while (start < arr.length - 1) {
        iterator = start + 1;
        while (iterator < arr.length) {
            max = Math.max(max, arr[iterator] - arr[start]);
            iterator++;
        }
        start++;
    }

    return max;
};

console.log(calculateMaxDifference([7, 1, 5, 3, 6, 4]));
