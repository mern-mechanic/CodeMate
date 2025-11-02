console.clear();
console.log('<---------------- कोड सैंडबॉक्स में आपका स्वागत है ----------------->');

/*

Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true

*/

const generateFrequency = (text) => {
    const msgFrq = {};
    for (let char in text) {
        msgFrq[char] = (msgFrq[char] || 0) + 1;
    }

    return msgFrq;
};

const constructNote = (msg, letters) => {
    const msgFrq = generateFrequency(msg);
    const ltrFrq = generateFrequency(letters);

    console.log(msgFrq);
    console.log(ltrFrq);

    return false;
};

console.log(constructNote('aa', 'abc')); // false
