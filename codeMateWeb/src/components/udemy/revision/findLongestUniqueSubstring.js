const findLongestUniqueSubstring = (str) => {
    let hasSeen = {}; // Notebook of seen characters and their positions
    let p1 = 0; // Start of current window
    let p2 = 0; // Current character
    let maxLen = 0; // Longest unique substring length

    while (p2 < str.length) {
        const char = str[p2];

        if (hasSeen[char] >= p1) {
            p1 = hasSeen[char] + 1; // Jump start to after the repeated character
        }

        hasSeen[char] = p2; // Write/update position in notebook
        maxLen = Math.max(maxLen, p2 - p1 + 1); // Update max length
        p2++; // Move forward
    }

    return maxLen;
};

// console.log(findLongestUniqueSubstring('')); // 0
// console.log(findLongestUniqueSubstring('rithmschool')); // 7
// console.log(findLongestUniqueSubstring('thisisawesome')); // 6
// console.log(findLongestUniqueSubstring('thecatinthehat')); // 7
console.log(findLongestUniqueSubstring('bbbbbb')); // 1
// console.log(findLongestUniqueSubstring('longestsubstring')); // 8
// console.log(findLongestUniqueSubstring('thisishowwedoit')); // 6
