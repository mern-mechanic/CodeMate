const isPalindrome = (str) => {
    let start = 0;
    let mid = str.length / 2;

    while (start < mid) {
        if (str[start] !== str[str.length - start - 1]) {
            return false;
        }
        start++;
    }

    return true;
};

console.log(isPalindrome('rameshhsemar'));
