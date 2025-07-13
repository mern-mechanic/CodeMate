/*
Given an array of positive integers arr and a positive integer num, return the minimal length of a contiguous subarray of which the sum is greater than or equal to num.
If there is no such subarray, return 0 instead.
*/

const minSubArrayLen = (arr, target) => {
    let p1 = 0;
    let p2 = 0;
    let window = 0;
    let minWindowSize = Infinity;
    if (!arr || arr.length === 0) return minWindowSize;

    while (p2 < arr.length) {
        // loop over and update window by shrinking it
        while (window >= target) {
            minWindowSize = Math.min(minWindowSize, p2 - p1);
            window -= arr[p1];
            p1++;
        }

        // current window
        window += arr[p2];
        p2++;
    }

    return minWindowSize === Infinity ? 0 : minWindowSize;
};

console.log(minSubArrayLen([1, 5, 6, 7, 4], 4));
console.log(minSubArrayLen([1, 5, 6, 7, 4], 7));
console.log(minSubArrayLen([1, 5, 6, 7, 4], 13));
console.log(minSubArrayLen([1, 5, 6, 7, 4], 11));
console.log(minSubArrayLen([1, 5, 6, 7, 4], 18));
