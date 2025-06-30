const capitalizeWords = (arr) => {
    if (arr.length === 0) return [];
    const [first, ...rest] = arr;
    return [first.toUpperCase(), ...capitalizeWords(rest)];
};

// let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])); // ['I', 'AM', 'LEARNING', 'RECURSION']
