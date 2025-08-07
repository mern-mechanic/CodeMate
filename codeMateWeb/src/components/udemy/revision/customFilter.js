Array.prototype.customFilter = function (cb) {
    const returnArr = [];
    for (let i = 0; i < this.length; i++) {
        console.log();
        if (cb(this[i])) {
            returnArr.push(this[i]);
        }
    }

    return returnArr;
};

console.log([1, 2, 3, 4, 5].customFilter((el) => el !== 3));
