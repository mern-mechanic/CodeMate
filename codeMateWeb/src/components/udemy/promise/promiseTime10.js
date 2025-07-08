console.log('start'); // (1)

const fetchData = new Promise((resolve, reject) => {
    console.log('Fetching data...'); // (2)
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve('✅ Data received!');
        } else {
            reject('❌ Failed to fetch data.');
        }
    }, 0); // (Scheduled as macrotask)
}); // (3) Promise executor runs immediately

fetchData
    .then((data) => {
        console.log('Resolved:', data); // (6) After resolve
    })
    .catch((error) => {
        console.log('Rejected:', error); // (not hit in this case)
    });

(async function () {
    await Promise.resolve(); // (4)
    console.log('AWAIT'); // (5) microtask
})();

console.log('END'); // (4)
