async function bar() {
    console.log('X');
    await Promise.resolve();
    console.log('Y');
}

console.log('Start');

bar();

console.log('End');
