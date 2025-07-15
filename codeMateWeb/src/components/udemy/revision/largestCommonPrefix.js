const largestCommonPrefix = (arr) => {
    let p1 = 0;

    while (p1 < arr[0].length) {
        let ch = arr[0][p1];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][p1] !== ch) return arr[0].slice(0, p1);
        }
        p1++;
    }

    return arr[0].slice(0, p1);
};

// console.log(largestCommonPrefix(['flower', 'flow', 'flight']));
