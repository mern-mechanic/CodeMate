console.clear();
console.log('Flatten Array');

const flattenArray = (arr) => {
    if (!Array.isArray(arr)) {
        return arr;
    }

    return arr.reduce((acc, val) => {
        return acc.concat(flattenArray(val));
    }, []);
};

console.log(flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
