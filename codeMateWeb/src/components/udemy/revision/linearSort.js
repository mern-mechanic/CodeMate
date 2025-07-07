// const linearSort = (arr) => {
//     let p1 = 0;
//     let p2 = 0;

//     while (p1 < arr.length) {
//         p2 = 0;
//         while (p2 < arr.length - p1) {
//             if (arr[p2] > arr[p2 + 1]) {
//                 let temp = arr[p2];
//                 arr[p2] = arr[p2 + 1];
//                 arr[p2 + 1] = temp;
//             }
//             p2++;
//         }
//         p1++;
//     }

//     return arr;
// };

const linearSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
};

console.log(linearSort([2, 4, 21, 3, 3, 74, 1, 35, 31, 2, 3, 43, 5]));
