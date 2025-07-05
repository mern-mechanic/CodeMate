const averagePair = (arr, avg) => {
    let left = 0;
    let right = arr.length - 1;
    let tempAvg = 0;

    if (tempAvg === avg) return true;

    while (left < right && tempAvg !== avg) {
        tempAvg = (arr[left] + arr[right]) / 2;
        if (tempAvg > avg) {
            right--;
        } else if (tempAvg < avg) {
            left++;
        } else {
            return true;
        }
    }
    return false;
};

console.log(averagePair([1, 2, 3], 2.5));
