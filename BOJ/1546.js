const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const count = input[0];
const score = input[1].split(' ').map(Number);

const maxScore = Math.max(...score);
const newScore = score.map(val => val / maxScore * 100);

const sum = newScore.reduce((acc, cur) => {
    return acc + cur;
});

console.log(sum / count);