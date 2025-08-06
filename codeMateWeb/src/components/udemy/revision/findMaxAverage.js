const findMaxAverage = (arr, window) => {
    let tempAvg = arr.slice(0, window).reduce((avg, el) => (avg += el), 0) / window;
    let maxAvg = tempAvg;

    for (let i = 0; i < arr.length; i++) {
        tempAvg = tempAvg - (arr[i] + arr[i + window]) / window;
        maxAvg = Math.max(maxAvg, tempAvg);
    }

    return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
