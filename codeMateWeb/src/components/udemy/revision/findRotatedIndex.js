const findRotatedIndex = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    // Handle edge cases
    if (target === arr[left]) return left;
    if (target === arr[right]) return right;

    // Find pivot
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

    // Decide which side to search
    if (target >= arr[0] && target <= arr[pivot - 1]) {
        right = pivot - 1;
    } else {
        left = pivot;
    }

    // Binary search in the chosen half
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 4));
// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 5));
// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 6));
// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 7));
// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 8));
// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 9));
// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 1));
// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 2));
// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 3));
// console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 10));

// [4,5,6,1,2,3] --> this will create an infinite loop if we put condition while (left <= right) as at one stage left === right === mid === 3 and it goes in infinite loop.
