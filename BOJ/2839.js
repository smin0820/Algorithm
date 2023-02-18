const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split();
let five = 0;
let three = 0;

while (true) {
    if (input % 5 === 0) {
        five = input / 5;
        console.log(five + three);
        break;
    }
    if (input < 0) {
        console.log(-1);
        break;
    }
    input -= 3;
    three++;
}