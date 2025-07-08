const largestCommonPrefix = (arr) => {
    for (let i = 0; i < arr[0].length; i++) {
        let character = arr[0][i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j][i] !== character) return i;
        }
    }

    return null;
};

console.log(largestCommonPrefix(['flower', 'flow', 'flight']));
