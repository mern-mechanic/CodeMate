console.log('1');

(async function () {
    await Promise.resolve(); // (A)
    console.log('2'); // (B)
})();

Promise.resolve().then(() => console.log('3')); // (C)

console.log('4');
