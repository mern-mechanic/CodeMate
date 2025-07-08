/*
Given an array of positive integers arr and a positive integer num, return the minimal length of a contiguous subarray of which the sum is greater than or equal to num.
If there is no such subarray, return 0 instead.
*/
const minSubArrayLen = (arr, num) => {
    let p1 = 0;
    let p2 = 0;
    let window = 0;
    let minWindowSize = Infinity;

    while (p2 < arr.length) {
        window += arr[p2];
        p2++;

        while (window >= num) {
            minWindowSize = Math.min(minWindowSize, p2 - p1);
            window -= arr[p1];
            p1++;
        }
    }

    return minWindowSize === Infinity ? 0 : minWindowSize;
};

console.log(minSubArrayLen([1, 5, 6, 7, 4], 4));
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
