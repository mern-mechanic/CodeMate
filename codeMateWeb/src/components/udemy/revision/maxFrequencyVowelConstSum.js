const maxFrequencyVowelConstSum = (str) => {
    const strFrequency = {};
    let vowelMax = 0;
    let constMax = 0;

    for (let i = 0; i < str.length; i++) {
        strFrequency[str[i]] = (strFrequency[str[i]] || 0) + 1;
    }

    for (let key in strFrequency) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        if (vowels.includes(key)) {
            vowelMax = Math.max(vowelMax, strFrequency[key]);
        } else {
            constMax = Math.max(constMax, strFrequency[key]);
        }
    }

    return vowelMax + constMax;
};

console.log(maxFrequencyVowelConstSum('successes'));
