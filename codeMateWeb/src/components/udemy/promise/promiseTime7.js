console.log('1');

(async function () {
    await Promise.resolve();
    console.log('2');
})();

Promise.resolve().then(() => console.log('3'));

console.log('4');
