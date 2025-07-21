console.clear();
console.log(
    '<------------------------ नमस्ते, कोड सैंडबॉक्स में आपका स्वागत है ------------------------->'
);

/* 
    Q1: Remove duplicate characters from a string
        Input: "abacbd"
        Output: "abcd"
*/

const removeDuplicatesFromString = (str) => {
    const seenCharacters = new Set();
    let uniqueStr = '';

    for (let i = 0; i < str.length; i++) {
        if (!seenCharacters.has(str[i])) {
            uniqueStr += str[i];
            seenCharacters.add(str[i]);
        }
    }

    return uniqueStr;
};

// console.log(removeDuplicatesFromString('abacbd'));

/*
    Q2: Check if a string is a palindrome (ignore cases and non-alphanumeric)
    Input: "A man, a plan, a canal: Panama"  
    Output: true
*/

const isPalindrome = (str) => {
    let strCopy = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = strCopy.length - 1;

    while (left < right) {
        if (strCopy[left] !== strCopy[right]) return false;
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
