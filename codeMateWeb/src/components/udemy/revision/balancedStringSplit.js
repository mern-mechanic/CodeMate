const balancedStringSplit = (str) => {
    let p1 = 0;
    let count = 0;
    let pair = 0;

    while (p1 < str.length) {
        if (str[p1] === 'R') {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            pair++;
        }
        p1++;
    }

    return pair;
};

console.log(balancedStringSplit('RLRRLLRLRL'));
