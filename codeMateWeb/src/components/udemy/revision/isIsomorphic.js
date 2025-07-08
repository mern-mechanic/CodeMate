const isIsomorphic = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let mapStr1ToStr2 = {};
    let mapStr2ToStr1 = {};

    for (let i = 0; i < str1.length; i++) {
        if (
            (mapStr1ToStr2[str1[i]] && mapStr1ToStr2[str1[i]] !== str2[i]) ||
            (mapStr2ToStr1[str2[i]] && mapStr2ToStr1[str2[i]] !== str1[i])
        )
            return false;

        mapStr1ToStr2[str1[i]] = str2[i];
        mapStr2ToStr1[str2[i]] = str1[i];
    }

    return true;
};

console.log(isIsomorphic('egg', 'kdd')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
