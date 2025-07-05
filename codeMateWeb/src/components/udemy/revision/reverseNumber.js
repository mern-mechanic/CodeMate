const reverseNumber = (num) => {
    let numCopy = num;
    let reverse = 0;

    while (numCopy > 0) {
        const rem = numCopy % 10; // the last digit of the number
        reverse = 10 * reverse + rem; // calculate reverse and miltiply by 10 and add last digit
        numCopy = Math.floor(numCopy / 10); // update number to come out of loop condition
    }

    return reverse;
};

console.log(reverseNumber(234323217));
