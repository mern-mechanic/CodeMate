function capitalizedWords(arr) {
    if (arr.length === 0) return [];
    const [first, ...rest] = arr;
    return [first.toUpperCase(), ...capitalizedWords(rest)];
}

// let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(['i', 'am', 'learning', 'recursion'])); // ['I', 'AM', 'LEARNING', 'RECURSION']
