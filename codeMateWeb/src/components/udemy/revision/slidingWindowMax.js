const findMaxInArray = (arr) => {
    return arr.sort((a, b) => b - a)[0];
};

const slidingWindowMax = (arr, window) => {
    const maxArr = [];

    for (let i = 0; i < arr.length - window + 1; i++) {
        maxArr.push(findMaxInArray(arr.slice(i, i + window)));
    }

    return maxArr;
};

console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3));
