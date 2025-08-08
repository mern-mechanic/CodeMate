// random test case
test('random', () => {
    expect(2 + 2).toBe(4);
});

// simple example test case
test('sum function', () => {
    expect(sum(2, 3)).toBe(5);
});

// test case with callback example
function fetchData(callback) {
    setTimeout(() => {
        callback('peanut butter');
    }, 1000);
}

test('fetches data with callback', (done) => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done(); // ✅ Tell Jest async work is done
    }
    fetchData(callback);
});

// Async await and promise example

const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello');
        }, 3000);
    });
};

// test case promise example
test('fetchDataPromise with promise', () => {
    return fetchDataPromise().then((data) => {
        expect(data).toBe('Hello');
    });
});

// Async Await Example test case
test('Promise Setup', async () => {
    const data = await fetchDataPromise();
    expect(data).toBe('Hello');
});
