let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ');

let H = parseInt(input[0]);
let M = parseInt(input[1]);

M -= 45;

if (M < 0) {
    M += 60;
    H--;
    if (H === -1) {
        H += 24;
    }
}
console.log(H + ' ' + M);
