const lengthOfLastWord = (s) => {
    if (s.length < 1) return 0;
    let p2 = s.length - 1;

    while (p2 > 0) {
        if (s[p2] === ' ') return s.length - 1 - p2;
        p2--;
    }

    return s.length;
};

console.log(lengthOfLastWord('this is a simple text sample demos'));
