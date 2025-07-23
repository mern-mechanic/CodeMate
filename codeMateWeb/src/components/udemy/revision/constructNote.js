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

const constructNote = (message, letters) => {
    // initialize frequency counters for each message and letter

    if (!letters) return false;

    const messageFrequency = {};
    const lettersFrequency = {};

    // get frequency of letters in message
    for (let i = 0; i < message.length; i++) {
        messageFrequency[message[i]] = (messageFrequency[message[i]] || 0) + 1;
    }

    // get frequency of letters in letter
    for (let i = 0; i < letters.length; i++) {
        lettersFrequency[letters[i]] = (lettersFrequency[letters[i]] || 0) + 1;
    }

    // compare the frequency of both message and letter to see if it will fit
    for (let key in lettersFrequency) {
        if (lettersFrequency[key] < (messageFrequency[key] || 0)) {
            return false;
        }
    }

    // return true by default
    return true;
};

constructNote('aa', 'abc'); // false
constructNote('abc', 'dcba'); // true
constructNote('aabbcc', 'bcabcaddff'); // true
