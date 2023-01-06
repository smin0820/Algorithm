const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const piece = [1, 1, 2, 2, 2, 8];

const result = piece.map((element, index) => element - input[index])


console.log(result.join(' '));