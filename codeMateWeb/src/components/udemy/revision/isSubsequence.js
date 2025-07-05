const isSubsequence = (word, string) => {
    let wordPointer = 0;
    let stringPointer = 0;

    while (stringPointer < string.length) {
        if (string[stringPointer] === word[wordPointer]) {
            wordPointer++;
            if (wordPointer === word.length) return true;
        } else {
            wordPointer = 0;
        }
        stringPointer++;
    }

    return false;
};

console.log(isSubsequence('hello', 'ohello world'));
