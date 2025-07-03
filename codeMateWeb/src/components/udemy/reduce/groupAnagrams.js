const groupAnagrams = (arr) => {
    const list = {};

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i].split('').sort().join('');
        list[key] = list[key] || [];
        list[key].push(arr[i]);
    }

    return Object.values(list);
};

const arr = ['cat', 'mat', 'car', 'rac', 'tab', 'bat', 'tba'];
console.log(groupAnagrams(arr));
