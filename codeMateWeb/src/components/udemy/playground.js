console.clear();
console.log(
    '<--------------------------- कोड सैंडबॉक्स में आपका स्वागत है --------------------------->'
);

const sumZero = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let tempSum = arr[left] + arr[right];
        if (tempSum === target) {
            return [left, right];
        } else if (target > tempSum) {
            left++;
        } else {
            right--;
        }
    }

    return [-1, -1];
};

console.log(sumZero([-3, -2, -1, 0, 1, 2], 0));
