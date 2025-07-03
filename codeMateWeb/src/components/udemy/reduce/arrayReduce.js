console.clear();

const sum = [1, 2, 3, 4, 5].reduce((acc, el) => (acc += el), 0);
console.log(sum);

const findMax = [1, 2, 4, 12, 41, 2, 1].reduce((acc, el) => Math.max(acc, el), 0);
console.log(findMax);

const countOccurrence = [1, 2, 2, 2, 3, 4, 1].reduce((acc, el) => {
    return acc + (el === 2 ? 1 : 0);
}, 0);
console.log(countOccurrence);

const flattenTwoDimensionalArray = [[1, 2], [1], [2, 3], [3, 3, 5, 3, 2, 3]].reduce((acc, el) => {
    acc.push(...el);
    return acc;
}, []);
console.log(flattenTwoDimensionalArray);

const concenTrateArrayOfString = ['hello', '', 'abhishek', 'kumar'].reduce((acc, el) => {
    acc += ' ' + el;
    return acc;
}, '');
console.log(concenTrateArrayOfString);

const groupItemsByArray = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' },
    { type: 'fruit', name: 'carrot' },
].reduce((acc, el) => {
    acc[el.type] = acc[el.type] || [];
    acc[el.type].push(el.name);
    return acc;
}, {});
console.log(groupItemsByArray);

const countOccurrencesOfEachElement = ['a', 'b', 'a', 'c', 'b'].reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
}, {});
console.log(countOccurrencesOfEachElement);

const createObjectFromArrayKeyValuePair = [
    ['a', 1],
    ['b', 2],
].reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});
console.log(createObjectFromArrayKeyValuePair);

const reverseArrayUsingReduce = [1, 2, 3, 4, 5, 6, 5, 4].reduce((acc, el) => {
    return [el, ...acc];
}, []);
console.log(reverseArrayUsingReduce);

const reverseString = 'abhishek'
    .split('')
    .reduce((acc, el) => [el, ...acc], [])
    .join('');
console.log(reverseString);

const implementMapUsingReduce = [1, 2, 3, 4].reduce((acc, el) => {
    acc.push(el * 2);
    return acc;
}, []);
console.log(implementMapUsingReduce);

const groupWordsByLetter = ['apple', 'ant', 'banana', 'berry', 'carrot', 'cucumber'].reduce(
    (acc, word) => {
        const key = word[0];
        acc[key] = acc[key] || [];
        acc[key].push(word);
        return acc;
    },
    {}
);
console.log(groupWordsByLetter);

const calculateTotalPriceInCart = [
    { item: 'phone', price: 540 },
    { item: 'case', price: 20 },
    { item: 'charger', price: 40 },
].reduce((acc, { price }) => {
    acc += price;
    return acc;
}, 0);

console.log(calculateTotalPriceInCart);

const implementFilterUsingReduce = [1, 2, 3, 4].reduce((acc, el) => {
    if (el > 2) {
        acc.push(el);
    }
    return acc;
}, []);
console.log(implementFilterUsingReduce);

const transformAnArrayOfObjectsIntoLookupTable = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
].reduce((acc, el) => {
    acc[el.id] = el;
    return acc;
}, {});
console.log(transformAnArrayOfObjectsIntoLookupTable);

const implementUnique = [1, 2, 3, 4, 5, 3, 2, 1, 6].reduce(
    (acc, el) => {
        if (!acc.set.has(el)) {
            acc.result.push(el);
            acc.set.add(el);
        }
        return acc;
    },
    { result: [], set: new Set() }
);
console.log(implementUnique);

const double = (a) => 2 * a;
const square = (a) => a * a;
const increment = (a) => ++a;

const compositeFunction = (arr, num) => {
    return arr.reduceRight((acc, el) => {
        return el(acc);
    }, num);
};

console.log(compositeFunction([square, double, increment], 1));
