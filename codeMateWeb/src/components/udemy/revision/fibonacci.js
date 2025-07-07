const fibonacciNumber = (num) => {
    if (num < 3) return 1;

    return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
};
console.log(fibonacciNumber(7));

/*

0 1 1 2 3 5 8 13 21 34 55

*/
