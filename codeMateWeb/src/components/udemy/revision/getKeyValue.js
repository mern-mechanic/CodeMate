const input = {
    a: {
        b: {
            c: {
                d: 10,
                e: 20,
            },
        },
    },
    f: {
        g: {
            h: {
                i: {
                    j: {
                        k: 11,
                        l: 22,
                    },
                },
            },
        },
    },
};

const getKeyValue = (obj, key) => {
    if (!obj || typeof obj !== 'object') return {};

    for (let k in obj) {
        if (k === key) return obj[k];
        if (typeof obj[k] === 'object') {
            const result = getKeyValue(obj[k], key);
            if (result !== null) return result;
        }
    }

    return null;
};

console.log(getKeyValue(input, 'c'));
