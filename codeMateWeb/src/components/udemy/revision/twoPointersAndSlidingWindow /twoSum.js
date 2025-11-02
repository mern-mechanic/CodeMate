// Brute force approach to solve the problem

const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum === target) return [i, j];
        }
    }

    return [-1, -1];
};

console.log(twoSum([2, 7, 8, 9, 10, 11, 15], 26));

const twoSumPointerApproach = (arr, target) => {
    let p1 = 0;
    let p2 = arr.length - 1;

    while (p1 < p2) {
        let sum = arr[p1] + arr[p2];

        if (target === sum) {
            return [p1, p2];
        } else if (target > sum) {
            p1++;
        } else {
            p2--;
        }
    }

    return [-1, -1];
};

console.log(twoSumPointerApproach([2, 7, 8, 9, 10, 11, 15], 26));

const twoSumFromMapApproach = (arr, target) => {
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }

    for (let key in map) {
        let anotherNumber = target - key;
        if (map.hasOwnProperty(anotherNumber) && map[anotherNumber] !== map[key])
            return [map[key], map[anotherNumber]];
    }

    return [-1, -1];
};

console.log(twoSumFromMapApproach([2, 7, 8, 9, 10, 11, 15], 26));
