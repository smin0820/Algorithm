const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const testCase = parseInt(input.shift());

for (i = 0; i < testCase; i++) {
    const floor = Number(input.shift());
    const room = Number(input.shift());
    let apartment = Array.from(Array(floor + 1), () => Array(room + 1).fill(0));
    for (k = 1; k <= room; k++) {
        apartment[0][k] = k;
    }
    for (j = 1; j <= floor; j++) {
        for (k = 1; k <= room; k++) {
            apartment[j][k] = apartment[j - 1][k] + apartment[j][k - 1];
        }
    }
    console.log(apartment[floor][room]);
}
