const jewelsAndStones = (jewels, stones) => {
    let stonesMap = {};
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
        stonesMap[stones[i]] = (stonesMap[stones[i]] || 0) + 1;
    }

    for (let i = 0; i < jewels.length; i++) {
        if (stonesMap[jewels[i]]) {
            count += stonesMap[jewels[i]];
        }
    }

    return count;
};

console.log(jewelsAndStones('z', 'ZZzza'));
