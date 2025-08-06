const findSingleElementInSortedArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === arr[mid - 1]) {
            const length = mid - 2 - left + 1;
            if (length % 2 === 1) {
                right = mid - 2;
            } else {
                left = mid + 1;
            }
        } else {
            const length = right - mid + 2 + 1;
            if (length % 2 === 1) {
                left = mid + 2;
            } else {
                left = mid - 1;
            }
        }
    }

    return left;
};

console.log(findSingleElementInSortedArray([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]));
