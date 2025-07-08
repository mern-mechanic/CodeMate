console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

async function foo() {
    console.log('C');
    await null;
    console.log('D');
}

foo();

console.log('E');
