const sumZero = (arr, sum) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let tempSum = arr[left] + arr[right];
        if (tempSum === sum) {
            return [left, right];
        } else if (tempSum > sum) {
            right--;
        } else {
            left++;
        }
    }

    return [-1, -1];
};

console.log(sumZero([-3, -2, -1, 0, 1, 2], 0));
