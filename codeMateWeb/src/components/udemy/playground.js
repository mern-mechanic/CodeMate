const binarySearch = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;
    if (arr[start] === num) return 0;
    if (arr[end] === num) return end;
    let mid = Math.floor((start + end) / 2);

    while (start < end && num !== arr[mid]) {
        if (num > arr[mid]) {
            start = mid;
        } else if (num < arr[mid]) {
            end = mid;
        } else {
            return mid;
        }
        mid = Math.floor((start + end) / 2);
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
