const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
input.shift();
let arr = [];
for (i = 0; i < input.length; i++) {
    arr.push(input[i].split(' ').map(Number));
}
let answer = '';
arr.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]).forEach(e => answer += `${e[0]} ${e[1]} \n`);
console.log(answer);