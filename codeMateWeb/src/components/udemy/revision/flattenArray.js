/*
    Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/
const flatten = (arr) => {
    if (!Array.isArray(arr)) return [arr]; // wrap non-array in array

    if (arr.length === 0) return [];

    const [first, ...rest] = arr;

    return [...flatten(first), ...flatten(rest)];
};

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
