const isSubsequence = (s, t) => {
    let p1 = 0;
    let p2 = 0;

    while (p2 < t.length) {
        if (s[p1] === t[p2]) {
            p1++;
            if (p1 === s.length) return true;
        } else {
            p1 = 0;
        }
        p2++;
    }

    return false;
};

console.log(isSubsequence('hello', 'sdjf sjkd fkdhf jksdfh jksdhf dksohello world'));
