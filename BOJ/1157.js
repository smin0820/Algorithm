const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
const newInput = input.toUpperCase();
const countArr = new Array(26).fill(0);
let str = [];


for (i = 0; i < newInput.length; i++) {
    countArr[newInput.charCodeAt(i) - 65]++;
}

const max = Math.max(...countArr);
const index = countArr.indexOf(max);
let sameIndex = false;

for (i = 0; i < countArr.length; i++) {
    if (countArr[i] === max && index !== i) {
        sameIndex = true;
        break;
    }
}

console.log(sameIndex ? '?' : String.fromCharCode(index + 65));