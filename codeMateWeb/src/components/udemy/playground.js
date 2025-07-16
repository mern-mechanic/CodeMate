console.clear();
console.log('<------------------ CODE -------------------->');

const findLastIndexOfZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = -1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0) {
            lastIndex = mid;
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return lastIndex;
};

console.log(findLastIndexOfZero([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
