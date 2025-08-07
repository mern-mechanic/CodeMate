const slidingWindowMax = (arr, windowSize) => {
    let tempSum = arr.slice(0, windowSize).reduce((acc, el) => (acc += el), 0);
    let maxSum = tempSum;

    for (let i = 0; i < arr.length - windowSize; i++) {
        tempSum = tempSum - arr[i] + arr[i + windowSize];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
};

console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3));
