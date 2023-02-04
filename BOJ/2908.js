const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ');

const [a, b] = input.map(v => [...v].reverse().join(''));
console.log(Math.max(a, b));

// let num1 = input[0].split('').reverse();
// let num2 = input[1].split('').reverse();

// num1 = parseInt(num1.join(''));
// num2 = parseInt(num2.join(''));

// console.log(num1 > num2 ? num1 : num2);