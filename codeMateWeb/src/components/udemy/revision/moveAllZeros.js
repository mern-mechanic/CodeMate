const moveAllZeros = (arr) => {
    let p1 = 0;
    let p2 = 0;

    while (p2 < arr.length) {
        if (arr[p2] !== 0) {
            arr[p1] = arr[p2];
            arr[p2] = 0;
            p1++;
        }
        p2++;
    }

    return arr;
};

console.log(moveAllZeros([0, 1, 0, 3, 12, 6, 34, 3, 3, 4, 9, 0, 8, 0, 8, 0, 8, 0]));
