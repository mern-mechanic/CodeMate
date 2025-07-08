const fetchData = () => {
    return new Promise((resolve, reject) => {
        console.log('Fetching data...');

        setTimeout(() => {
            const success = true; // toggle to false to simulate an error

            if (success) {
                resolve('✅ Data received!');
            } else {
                reject('❌ Failed to fetch data.');
            }
        }, 2000);
    });
};

fetchData()
    .then((data) => {
        console.log('Resolved:', data);
    })
    .catch((error) => {
        console.log('Rejected:', error);
    });
