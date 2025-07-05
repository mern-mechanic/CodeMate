const groupAnagramsReduce = (arr) => {
    return Object.values(
        arr.reduce((acc, el) => {
            const key = el.split('').sort().join('');
            acc[key] = acc[key] || [];
            acc[key].push(el);
            return acc;
        }, {})
    );
};

console.log(groupAnagramsReduce(['eat', 'tea', 'bat', 'tab', 'net', 'ate', 'ten']));
