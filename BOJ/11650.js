const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let data = [];
for(let i = 1; i <= n; i++) {
    data.push(input[i].split(' ').map(Number));
}

data.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

let answer = "";
for(let point of data) {
    answer += point[0] + " " + point[1] + "\n";
}

console.log(answer);

// input.shift();
// const arr = [];
// for (i = 0; i < input.length; i++) {
//     arr.push(input[i].split(' ').map(Number));
// }
// let result = '';
// arr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]).forEach(e => result += `${e[0]} ${e[1]}\n`);
// console.log(result);
