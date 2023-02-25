const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const num = Number(input[0]);
const testNum = input[1].split(' ').map(Number);

let answer = 0;

for (i = 0; i < testNum.length; i++) {
    if (testNum[i] === 1) {
        continue;
    } else {
        let count = 0;
        for (j = 2; j < testNum[i]; j++) {
            if (testNum[i] % j === 0) {
                count++;
            }
        }
        if (count === 0) {
            answer++;
        }
    }
}
console.log(answer);
