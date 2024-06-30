const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ').map(Number);

let count = 1;
let flag = false;


while(input[0] <= input[1]) {
    if(input[0] === input[1]) {
        flag = true;
        break;
    }

    if(input[1] % 2 === 0) {
        input[1] = input[1] / 2;
    } else if(input[1] % 10 === 1) {
        input[1] = Math.floor(input[1] / 10);
    } else {
        break;
    }
    count++;
}

if(flag === true) {
    console.log(count);
} else {
    console.log(-1);
}

