const countZeroes = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    if (arr[left] === 0) return arr.length;
    if (arr[right] === 1) return 0;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === 0) {
            // kya pta sala mid yahi ho isi liye consider this point as well
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left === 0 ? 0 : arr.length - left;
};
console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
