const maxSubarraySum = (arr, window) => {
    let p1 = 0;
    let tempSum = arr.slice(0, window).reduce((acc, el) => (acc += el), 0);
    let max = -Infinity;

    while (p1 < arr.length - window) {
        tempSum = tempSum - arr[p1] + arr[p1 + window];
        max = Math.max(tempSum, max);
        p1++;
    }

    return max;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
