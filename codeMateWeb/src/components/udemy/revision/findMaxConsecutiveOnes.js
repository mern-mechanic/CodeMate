const findMaxConsecutiveOnes = (arr) => {
    let p1 = 0;
    let p2 = 0;
    let len = 0;

    while (p2 < arr.length) {
        if (arr[p2] !== 1) {
            p1 = p2 + 1;
        } else {
            len = Math.max(len, p2 - p1 + 1);
        }
        p2++;
    }

    return len;
};

console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1]));
