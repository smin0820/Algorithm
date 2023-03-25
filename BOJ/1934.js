const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const n = input.shift();

let answer = [];
for (i = 0; i < n; i++) {
    let [a, b] = input[i].split(' ').map(e => +e);
    let realA = a, realB = b;
    while (a % b !== 0) {
        let r = a % b;
        if (r !== 0) {
            a = b;
            b = r;
        }
    }
    answer.push(realA * realB / b);
}
console.log(answer.join('\n'));