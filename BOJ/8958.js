const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const caseNum = parseInt(input[0]);


for (i = 1; i <= caseNum; i++) {
    let n = 0;
    let sum = 0;
    input[i].split('').forEach((Element) => {
        if (Element === 'O') {
            n++;
            sum += n;
        } else {
            n = 0;
        }
    });
    console.log(sum);
}   