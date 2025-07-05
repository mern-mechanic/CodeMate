/*
    Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
*/

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, isOdd) {
    if (arr.length < 1) return false;

    const [first, ...rest] = arr;
    if (isOdd(first)) return true;

    return someRecursive(rest, isOdd);
}

console.log(someRecursive([4, 2, 6, 5], isOdd)); // true
