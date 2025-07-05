const isIsomorphic = (s, t) => {
    if (s.length !== t.length) return false;
    let strMap = {};
    let sCopy = s.split('');

    let p1 = 0;

    while (p1 < s.length) {
        if (!strMap[s[p1]]) {
            strMap[s[p1]] = t[p1];
        }
        sCopy[p1] = strMap[s[p1]];
        p1++;
    }

    console.log(sCopy.join(''));

    return sCopy.join('') === t;
};

console.log(isIsomorphic('egg', 'add'));
