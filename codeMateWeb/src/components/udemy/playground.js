const findLongestUniqueSubstring = (str) => {
    if (str.length === 0) return 0;

    let p1 = 0;
    let p2 = 0;
    const seenChar = {};
    let maxLen = 0;

    while (p2 < str.length) {
        let char = str[p2];

        if (seenChar[char] >= p1) {
            p1 = seenChar[char] + 1;
        }

        maxLen = Math.max(maxLen, p2 - p1 + 1);
        seenChar[char] = p2;
        p2++;
    }

    return maxLen;
};

console.log(findLongestUniqueSubstring('')); // 0
console.log(findLongestUniqueSubstring('rithmschool')); // 7
console.log(findLongestUniqueSubstring('thisisawesome')); // 6
console.log(findLongestUniqueSubstring('thecatinthehat')); // 7
console.log(findLongestUniqueSubstring('bbbbbb')); // 1
console.log(findLongestUniqueSubstring('longestsubstring')); // 8
console.log(findLongestUniqueSubstring('thisishowwedoit')); // 6
