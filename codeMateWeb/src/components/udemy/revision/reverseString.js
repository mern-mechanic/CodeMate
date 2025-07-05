const reverseString = (str) => {
    let strArr = str.split('');
    let start = 0;

    while (start < strArr.length / 2) {
        const temp = strArr[start];
        strArr[start] = strArr[strArr.length - start - 1];
        strArr[strArr.length - start - 1] = temp;
        start++;
    }

    return strArr.join('');
};

console.log(reverseString('listen'));
