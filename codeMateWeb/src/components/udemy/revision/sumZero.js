const sumZero = (arr, num) => {
    let p1 = 0;
    let p2 = arr.length - 1;

    while (p1 < p2) {
        if (arr[p1] + arr[p2] > num) {
            p2++;
        } else if (arr[p1] + arr[p2] < num) {
            p1++;
        } else {
            return [arr[p1], arr[p2]];
        }
    }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2], 0));
