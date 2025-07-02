/*
Problem: Length of longest subarray with sum = K

Input: arr = [1, -1, 5, -2, 3], K = 3

Output: 4
*/

const findTheLongestSum = (arr, length) => {
    let start = 1;
    let sum = arr.slice(0, length).reduce((sum, el) => (sum += el));
    let max = sum;

    while (start < arr.length - k) {
        let tempSum = sum + arr[start + len] - arr[start];
        max = Math.max(tempSum, max);
        start++;
    }

    return max;
};

console.log(findTheLongestSum([1, -1, 5, -2, 3]));
