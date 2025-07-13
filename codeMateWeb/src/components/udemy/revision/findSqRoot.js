const findSqRoot = (num) => {
    if (num < 2) return num;

    let left = 2;
    let right = Math.floor(num / 2);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === num) return mid;
        else if (num > mid * mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

console.log(findSqRoot(16));
