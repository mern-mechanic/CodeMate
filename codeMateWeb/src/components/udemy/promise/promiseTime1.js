console.log('Start of file'); // 🔵 A

setTimeout(() => {
    console.log('Inside setTimeout'); // 🟢 E (macrotask)
}, 0);

async function asyncFunc() {
    console.log('Inside async function'); // 🟡 C
}

asyncFunc();

Promise.resolve().then(() => {
    console.log('Inside Promise.then'); // 🟠 D (microtask)
});

console.log('End of file'); // 🔴 B
