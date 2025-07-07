const removeSpecificNumberFromArray = (arr, num) => {
    let p1 = 0;
    let p2 = 0;

    while (p2 < arr.length) {
        if (arr[p2] !== num) {
            arr[p1] = arr[p2];
            p1++;
        }
        p2++;
    }

    return arr.slice(0, p1);
};

console.log(removeSpecificNumberFromArray([1, 2, 3, 4, 4, 3, 4, 2, 3, 2, 2, 3, 3, 4, 2], 2));
