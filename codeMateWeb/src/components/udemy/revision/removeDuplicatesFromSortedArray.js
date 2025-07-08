const removeDuplicatesFromSortedArray = (arr) => {
    let p1 = 0;
    let p2 = 0;

    while (p2 < arr.length) {
        if (arr[p2] > arr[p1]) {
            ++p1;
            arr[p1] = arr[p2];
        }
        p2++;
    }

    return arr.slice(0, p1 + 1);
};

console.log(removeDuplicatesFromSortedArray([1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5]));
