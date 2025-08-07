Array.prototype.customMap = function (cb) {
    const returnArr = [];
    for (let i = 0; i < this.length; i++) {
        returnArr.push(cb(this[i]));
    }

    return returnArr;
};

console.log([1, 2, 3, 4, 5].customMap((el) => el + 3));
