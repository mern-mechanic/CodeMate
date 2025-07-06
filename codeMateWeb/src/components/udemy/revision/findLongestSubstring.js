const findLongestSubstring = (str) => {
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

// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('thisishowwedoit')); // 6
