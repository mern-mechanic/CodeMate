const findLongestUniqueSubstring = (str) => {
    if (!str.length) return 0;

    let p1 = 0;
    let p2 = 0;
    const seenCharacters = {};
    let maxLength = 0;

    while (p2 < str.length) {
        const char = str[p2];

        // "Have I seen this character after or at the current window's start (p1)? If yes, I have a duplicate in the current window, and I must move p1 forward."
        if (seenCharacters[char] >= p1) {
            p1 = seenCharacters[char] + 1;
        }

        maxLength = Math.max(maxLength, p2 - p1 + 1);
        seenCharacters[char] = p2;
        p2++;
    }

    return maxLength;
};

console.log(findLongestUniqueSubstring('')); // 0
console.log(findLongestUniqueSubstring('rithmschool')); // 7
console.log(findLongestUniqueSubstring('thisisawesome')); // 6
console.log(findLongestUniqueSubstring('thecatinthehat')); // 7
console.log(findLongestUniqueSubstring('bbbbbb')); // 1
console.log(findLongestUniqueSubstring('longestsubstring')); // 8
console.log(findLongestUniqueSubstring('thisishowwedoit')); // 6
