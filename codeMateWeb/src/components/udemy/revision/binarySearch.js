const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
