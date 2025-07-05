const reverseString = (str) => {
    if (str.length < 1) return '';

    const [letter, ...subStr] = str;

    return reverseString(subStr.join('')) + letter;
};

console.log(reverseString('string'));
