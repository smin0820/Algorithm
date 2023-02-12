const fs = require('fs');
let [A, B, V] = fs.readFileSync('./input.txt').toString().split(' ').map(Number);
// Math.ceil 소수점 이하 정수 반환
console.log(Math.ceil((V - B) / (A - B)));
