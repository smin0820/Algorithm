const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
let list = [];

for (i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    list.push(input.indexOf(String.fromCharCode(i)));
}

console.log(list.join(' '));