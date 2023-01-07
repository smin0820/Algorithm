const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();
const A = input % 4;
const B = input % 100;
const C = input % 400;

if ((A === 0 && B !== 0) || C === 0) {
    console.log(1);
} else {
    console.log(0);
}