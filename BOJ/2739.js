const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split();

const dan = parseInt(input);

for (i = 1; i < 10; i++) {
    console.log(dan + ' * ' + i + ' = ' + dan * i);
}