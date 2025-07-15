const findLastIndexOfZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    if (arr[left] === 1) return 0;
    if (arr[right] === 0) return arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === 0) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    console.log(right);
};

console.log(findLastIndexOfZero([0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
