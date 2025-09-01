const mergeSortedArray = (left, right) => {
    let mergedArray = [];

    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < left.length && pointer2 < right.length) {
        if (left[pointer1] < right[pointer2]) {
            mergedArray.push(left[pointer1]);
            pointer1++;
        } else {
            mergedArray.push(right[pointer2]);
            pointer2++;
        }
    }

    return pointer1 > pointer2
        ? mergedArray.concat(right.slice(pointer2))
        : mergedArray.concat(left.slice(pointer1));
};

console.log(mergeSortedArray([1, 2, 3], [2, 5, 6, 7, 8, 9]));
