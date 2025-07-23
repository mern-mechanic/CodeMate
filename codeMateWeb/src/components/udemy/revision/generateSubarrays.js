const arr = [1, 2, 3, 4, 5];
const condition = (el) => el > 2;

const filtered = arr.filter(condition);

const generateSubarrays = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            result.push(arr.slice(i, j + 1));
        }
    }
    return result;

    console.log((arr.length * (arr.length + 1)) / 2);
};

const subarrays = generateSubarrays(filtered);
console.log('Subarrays:', subarrays);
console.log('Total count:', subarrays.length);
