const findFirstAndLastIndexOfElementInArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let firstIndexOfTarget = -1;
    let lastIndexOfTarget = -1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === target) {
            firstIndexOfTarget = mid;
            right = mid;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else if (target < arr[mid]) {
            right = mid - 1;
        }
    }

    left = firstIndexOfTarget;
    right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === target) {
            lastIndexOfTarget = mid;
            left = mid;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else if (target < arr[mid]) {
            right = mid - 1;
        }
    }

    return [firstIndexOfTarget, lastIndexOfTarget];
};

console.log(
    findFirstAndLastIndexOfElementInArray(
        [1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9],
        3
    )
);
