console.clear();
console.log(
    '<--------------------------- कोड सैंडबॉक्स में आपका स्वागत है --------------------------->'
);

const calculateMaxDifference = (arr) => {
    let minSoFar = Infinity;
    let maxDiff = 0;

    for (let i = 0; i < arr.length; i++) {
        minSoFar = Math.min(minSoFar, arr[i]);
        maxDiff = Math.max(maxDiff, arr[i] - minSoFar);
    }

    return maxDiff;
};

console.log(calculateMaxDifference([7, 1, 5, 3, 6, 4]));
