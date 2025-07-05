const removeDuplicatesFromNumberArray = (arr) => {
    let pointer = 0;
    let start = 0;

    while (start < arr.length) {
        if (arr[start] > arr[pointer]) {
            ++pointer;
            arr[pointer] = arr[start];
        }
        start++;
    }

    return arr.slice(0, pointer + 1);
};

console.log(removeDuplicatesFromNumberArray([1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5]));
