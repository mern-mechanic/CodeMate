const productOfArray = (arr) => {
    if (arr.length < 1) return 1;

    const [num, ...rest] = arr;

    return num * productOfArray(rest);
};

console.log(productOfArray([1, 2, 3, 4, 5, 6]));
