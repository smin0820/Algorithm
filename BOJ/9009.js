let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let pibo = [0, 1];
while(pibo[pibo.length - 1] < 1000000000) {
    pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

let testCase = Number(input[0]);
for(let tc = 1; tc <= testCase; tc++) {
    let n = Number(input[tc]);
    let result = [];
    let i = pibo.length - 1;
    while(n > 0) {
        if(pibo[i] <= n) {
            n -= pibo[i];
            result.push(pibo[i]);
        }
        i--;
    }
    let answer = '';
    for(let i = result.length - 1; i >= 0; i--) {
        answer += result[i] + ' ';
    }
    console.log(answer);
}
