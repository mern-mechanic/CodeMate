/*

    Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

    Example 1:

    Input: s = "cbaebabacd", p = "abc"
    Output: [0,6]
    Explanation:
    The substring with start index = 0 is "cba", which is an anagram of "abc".
    The substring with start index = 6 is "bac", which is an anagram of "abc".
    Example 2:

    Input: s = "abab", p = "ab"
    Output: [0,1,2]
    Explanation:
    The substring with start index = 0 is "ab", which is an anagram of "ab".
    The substring with start index = 1 is "ba", which is an anagram of "ab".
    The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

const findAnagrams = (s, p) => {
    const result = [];
    const pCount = Array(26).fill(0);
    const sCount = Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    // Fill p frequency
    for (let char of p) {
        pCount[char.charCodeAt(0) - aCharCode]++;
    }

    for (let i = 0; i < s.length; i++) {
        // Add current char to sCount
        sCount[s.charCodeAt(i) - aCharCode]++;

        // Remove leftmost char if window is larger than p
        if (i >= p.length) {
            sCount[s.charCodeAt(i - p.length) - aCharCode]--;
        }

        // Compare arrays
        if (i >= p.length - 1 && arraysMatch(pCount, sCount)) {
            result.push(i - p.length + 1);
        }
    }

    return result;
};

// Helper function to compare frequency arrays
const arraysMatch = (a, b) => {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};
