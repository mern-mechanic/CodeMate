const findRotatedIndex = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    if (target === arr[left]) return left;
    if (target === arr[right]) return right;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let pivot = left;
    left = 0;
    right = arr.length - 1;

    if (target >= arr[left] && target < arr[pivot]) {
        right = pivot - 1;
    } else {
        left = pivot;
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return -1;
};

console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 5));
