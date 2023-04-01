const fs = require('fs');
const [N, M] = fs.readFileSync('./input.txt').toString().split(' ').map(Number);
// let primeArr = [];

// for (i = N; i <= M; i++) {
//     primeArr[i] = i;
// }
// for (i = 2; i <= M; i++) {
//     if (primeArr[i] === 0) continue;
//     for (j = i + i; j <= M; j += i) {
//         primeArr[j] = 0;
//     }
// }
// primeArr = primeArr.filter(n => n !== 0);
// console.log(primeArr.join('\n'));

const primeArr = { 1: true };
for (i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if (primeArr[i]) {
        continue;
    }
    for (j = i ** 2; j <= M; j += i) {
        primeArr[j] = true;
    }
}
let result = [];
for (i = N; i <= M; i++) {
    if (!primeArr[i]) {
        result.push(i);
    }
}
console.log(result.join('\n'));