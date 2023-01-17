const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();

let count = 0;
let addNum = 0;
let num = input;


while (true) {
    addNum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + addNum % 10;
    count++;
    if (num == input) {
        console.log(count);
        break;
    }
}



