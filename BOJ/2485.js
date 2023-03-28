const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(e => +e);
input.shift();
let arr = [];
for (i = 1; i < input.length; i++) {
    arr.push(input[i] - input[i - 1]);
}

let GCD = gcd(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    GCD = gcd(GCD, arr[i]);
}

console.log(arr.reduce((a, c) => a + (c / GCD - 1), 0))

function gcd(a, b) {
    let r;
    while (b !== 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}