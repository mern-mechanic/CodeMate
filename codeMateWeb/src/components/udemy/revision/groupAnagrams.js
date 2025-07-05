const groupAnagrams = (arr) => {
    let group = {};

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].split('').sort().join('');
        group[key] = group[key] || [];
        group[key].push(arr[i]);
    }

    return Object.values(group);
};

console.log(groupAnagrams(['eat', 'tea', 'bat', 'tab', 'net', 'ate', 'ten']));
