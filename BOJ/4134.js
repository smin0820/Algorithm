const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(e => +e);
function isPrime(a) {
    for (let i = 2; i ** 2 <= a; i++) {
        if (a % i === 0) {
            return 0;
        }
    }
    if (a == 1) {
        return 0;
    }
    return a;
}

for (let i = 1; i <= input[0]; i++) {
    for (let j = input[i]; ; j++) {
        let temp = isPrime(j);
        if (temp !== 0) {
            console.log(temp);
            break;
        }
    }
}