const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

const n = 2;
const m = 10000;
let primeArr = [];
// 에라토스테네스의 체 : 소수만 구할 수 있는 코드
for (i = 2; i <= m; i++) {
    primeArr[i] = i;
}

for (i = n; i <= m; i++) {
    if (primeArr[i] === 0) continue;
    for (j = i + i; j <= m; j += i) {
        primeArr[j] = 0;
    }
}
// filter로 소수만 걸러냄
primeArr = primeArr.filter(n => n !== 0);

let answer = [];
for (i = 0; i < input.length; i++) {
    if (primeArr.includes(input[i])) continue;
    for (j = 0; primeArr[j] < input[i] / 2 + 1; j++) {
        const index = primeArr.indexOf(input[i] - primeArr[j]);
        if (index !== -1) {
            answer.push([primeArr[j], primeArr[index]]);
        }
    }
    if (answer.length !== 0) {
        const last = answer.pop();
        console.log(`${last[0]} ${last[1]}`);
    }
}