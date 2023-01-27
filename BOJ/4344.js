const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const caseNum = parseInt(input[0]);

for (i = 1; i <= caseNum; i++) {
    let count = 0;
    score = input[i].split(' ').map(Number);
    sum = score.reduce((acc, cur) => acc += cur);
    avg = Math.floor(sum / score[0]);
    const studentNum = score.shift();
    for (j = 0; j < score.length; j++) {
        if (score[j] >= avg) {
            count++;
        }
    }
    console.log((count / studentNum * 100).toFixed(3) + '%');
}