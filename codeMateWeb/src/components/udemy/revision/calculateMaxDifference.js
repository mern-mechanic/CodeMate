/*

You are given an array arr where each element represents the price of a stock on a given day.
Write a function to find the maximum profit you can achieve from a single buy and a single sell.

*/

const calculateMaxDifference = (arr) => {
    if (arr.length < 2) return 0;
    let minSoFar = arr[0];
    let maxProfit = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let profit = arr[i] - minSoFar;
        minSoFar = Math.min(minSoFar, arr[i]);
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
};
console.log(calculateMaxDifference([7, 1, 5, 3, 6, 4]));
