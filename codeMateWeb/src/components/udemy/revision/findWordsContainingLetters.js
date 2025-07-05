const findWordsContainingLetters = (arr, letter) => {
    let p2 = 0;
    const containsLetter = [];

    while (p2 < arr.length) {
        let p1 = 0;
        while (p1 < arr[p2].length) {
            if (arr[p2][p1] === letter) {
                containsLetter.push(p2);
                break;
            }
            p1++;
        }
        p2++;
    }

    return containsLetter;
    x;
};

console.log(
    findWordsContainingLetters(['leet', 'code', 'gave', 'me', 'nothing', 'but', 'tension'], 'e')
);
