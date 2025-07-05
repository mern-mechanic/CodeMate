const getPowerOf = (base, power) => {
    if (power < 1) return 1;

    return base * getPowerOf(base, power - 1);
};

console.log(getPowerOf(2, 3));
/*



*/
