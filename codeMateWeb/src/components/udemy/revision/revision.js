const secondLargestFunction = (arr) => {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return { firstLargest, secondLargest };
};

console.log(secondLargestFunction([1, 2, 32, 43, 54, 3, 5, 43, 2, 34, 32, 4, 53, 4, 23]));

const areThereDuplicates = (arr) => {
    const arrFrequency = {};

    for (let i = 0; i < arr.length; i++) {
        arrFrequency[arr[i]] = (arrFrequency[arr[i]] || 0) + 1;
    }

    for (let key in arrFrequency) {
        if (arrFrequency[key] === 2) return true;
    }

    return false;
};

console.log(areThereDuplicates(['a', 'b', 'c', 'd']));

/*
Given a sorted array of integers and a target average,
write a function called averagePair that determines whether there is a pair of values in the array whose average equals the target.
*/

const findAveragePair = (arr, avg) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let tempAvg = (arr[start] + arr[end]) / 2;
        if (tempAvg < avg) {
            start++;
        } else if (avg > tempAvg) {
            end--;
        } else {
            return true;
        }
    }

    return false;
};

console.log(findAveragePair([1, 2, 3], 3.5));

const balancedStringSplit = (str) => {
    let count = 0;
    let tracker = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'R') {
            count++;
        } else {
            count--;
        }
        if (count === 0) tracker++;
    }

    return tracker;
};

console.log(balancedStringSplit('RLRRRLLRLRLL'));

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    if (arr[left] === target) return left;
    if (arr[right] === target) return right;

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

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

const countUniqueValues = (arr) => {
    if (arr.length < 1) return false;

    let p1 = 0;
    let p2 = 0;

    while (p2 < arr.length) {
        if (arr[p2] !== arr[p1]) {
            p1++;
            arr[p1] = arr[p2];
        }
        p2++;
    }

    return arr.slice(0, p1 + 1);
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8]));

const countZeroes = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let firstZeroIndex = -1;

    if (arr[left] === 0) return arr.length;
    if (arr[right] === 1) return 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === 0) {
            firstZeroIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return firstZeroIndex === -1 ? 0 : arr.length - firstZeroIndex;
};

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0

const findDifferenceFromArray = (arr, diff) => {
    let traversedObj = {};

    /*
        a - b = diff
        a - b = diff
        a = diff + b
        b = a - diff
    */

    for (let i = 0; i < arr.length; i++) {
        if (
            traversedObj.hasOwnProperty(arr[i] + diff) ||
            traversedObj.hasOwnProperty(arr[i] - diff)
        )
            return true;

        traversedObj[arr[i]] = i;
    }

    return false;
};

console.log(findDifferenceFromArray([6, 1, 4, 10, 2, 4], 19));

const findLongestSubstring = (str) => {
    let p1 = 0;
    let p2 = 0;
    let maxLen = 0;
    let hasSeen = {};

    while (p2 < str.length) {
        let char = str[p2];

        if (hasSeen[char] >= p1) {
            p1 = hasSeen[char] + 1;
        }

        maxLen = Math.max(maxLen, p2 - p1 + 1);
        hasSeen[char] = p2;
        p2++;
    }

    return maxLen;
};

console.log(findLongestSubstring('longestsubstrings')); // 8
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('thisishowwedoit')); // 6

const findRotatedIndex = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    if (arr[left] === target) return left;
    if (arr[right] === target) return right;

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

    if (target >= arr[0] && target <= arr[pivot - 1]) {
        right = pivot;
    } else {
        left = pivot;
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return -1;
};

console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 4));
console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 5));
console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 6));
console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 7));
console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 8));
console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 9));
console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 1));
console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 2));
console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 3));
console.log(findRotatedIndex([4, 5, 6, 7, 8, 9, 1, 2, 3], 10));
