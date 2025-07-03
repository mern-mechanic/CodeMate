// Square Pattern
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += '*';
    }
    console.log(row);
}

// Triangle Pattern
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += `${j} `;
    }
    console.log(row);
}

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += `${i} `;
    }
    console.log(row);
}

for (let i = 5; i > 0; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += `${j} `;
    }
    console.log(row);
}

for (let i = 0; i <= 5; i++) {
    let row = '';
    for (let j = 5; j >= 0; j--) {
        // console.log(`${i} ${j}`);
        if (j - i <= 0) {
            row += '* ';
        } else {
            row += '_ ';
        }
    }
    console.log(row);
}

for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5 - i - 1; j++) {
        row += '_ ';
    }
    for (let j = 0; j < i + 1; j++) {
        row += '* ';
    }
    console.log(row);
}
let num = 6;

let toggle = 0;
for (let i = 0; i < num; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        toggle = toggle === 0 ? 1 : 0;
        row += `${toggle} `;
    }
    console.log(row);
}
