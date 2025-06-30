console.log('Playground');

function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return [];
    const [first, ...rest] = arr;
    const capitalized = first[0].toUpperCase() + first.slice(1);
    return [capitalized, ...capitalizeFirst(rest)];
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
