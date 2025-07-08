const isSubsequence = (word, string) => {
    let p1 = 0;
    let p2 = 0;

    while (p2 < string.length) {
        if (string[p2] === word[p1]) {
            p1++;
            if (p1 === word.length) return true;
        } else {
            p1 = 0;
        }
        p2++;
    }

    return false;
};

console.log(isSubsequence('hello', 'ohello world'));
