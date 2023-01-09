const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
let time = input[0].split(' ').map(Number);

let needTime = Number(input[1]);
let currentH = time[0];
let currentM = time[1] + needTime;

if (currentM >= 60) {
    currentH += Math.floor(currentM / 60);
    currentH %= 24;
    currentM %= 60;
}

console.log(currentH + ' ' + currentM);
