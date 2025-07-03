// Q1 :- Anagram problem
export const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const str1Frequency = {};

    for (let i = 0; i < str1.length; i++) {
        str1Frequency[str1[i]] = (str1Frequency[str1[i]] || 0) + 1;
    }

    for (let ch of str2) {
        if (!str1Frequency[ch]) return false;
        str1Frequency[ch]--;
    }

    return true;
};

/*
Q2:- You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
    Input: jewels = "aA", stones = "aAAbbbb"
    Output: 3
Example 2:
    Input: jewels = "z", stones = "ZZ"
    Output: 0
*/

export const countJewelAndStones = (jewels, stones) => {
    const stoneFrequency = {};
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
        stoneFrequency[stones[i]] = (stoneFrequency[stones[i]] || 0) + 1;
    }

    for (let i = 0; i < jewels.length; i++) {
        const jewel = jewels[i];
        if (stoneFrequency[jewel]) {
            count += stoneFrequency[jewel];
        }
    }

    return count;
};

/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
    Example 1:
        Input: s = "leetcode"
        Output: 0
Explanation:
    The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
    Input: s = "loveleetcode"
    Output: 2
    Example 3:
    Input: s = "aabb"
    Output: -1
*/
export const firstUniqCharInString = (str) => {
    const strMap = {};

    for (let ch of str) {
        strMap[ch] = (strMap[ch] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (strMap[ch] === 1) return i;
    }

    return -1;
};

/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
    Input: nums = [3,2,3]
    Output: 3

Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

*/

export const findMajorityElementInArray = (arr) => {
    const numberFrequency = {};

    arr.forEach((el) => {
        numberFrequency[el] = (numberFrequency[el] || 0) + 1;
    });

    for (let key in numberFrequency) {
        const num = arr.length / 2;
        if (numberFrequency[key] > num) return key;
    }

    return -1;
};

/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    Example 1:
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Example 2:
        Input: nums = [3,2,4], target = 6
        Output: [1,2]

    Example 3:
        Input: nums = [3,3], target = 6
        Output: [0,1]
*/

export const calculateTwoSum = (arr, sum) => {
    let start = 0;
    let iterator = 1;

    while (start < arr.length - 1) {
        while (iterator < arr.length) {
            let tempSum = arr[start] + arr[iterator];
            if (sum === tempSum) return [start, iterator];
            iterator++;
        }
        start++;
        iterator = start + 1;
    }
};

/*
    You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

    Return the number of consistent strings in the array words.

    Example 1:
        Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
        Output: 2
        Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
    Example 2:
        Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
        Output: 7
        Explanation: All strings are consistent.
    Example 3:
        Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
        Output: 4
        Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/

export const findConsistentString = (allowed, words) => {
    let count = 0;

    const calculateFrequencyOfStr = (str) => {
        const strFreq = {};
        for (let i = 0; i < str.length; i++) {
            strFreq[str[i]] = (strFreq[str[i]] || 0) + 1;
        }
        return strFreq;
    };

    const allowedFreq = calculateFrequencyOfStr(allowed);

    for (let i = 0; i < words.length; i++) {}

    return count;
};
