const findFirstIndexOfZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === 0) {
            lastIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return lastIndex;
};

console.log(findFirstIndexOfZero([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]));
