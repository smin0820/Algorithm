const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

function euclid(num1, num2) {
    let a = num1, b = num2;
    while (a % b !== 0) {
        const r = a % b;
        if (r !== 0) {
            a = b;
            b = r;
        }
    }
    // 최소공배수
    const min = num1 * num2 / b;
    return [b, min];
}

let [a, b] = input[0].split(' ').map(e => +e);
let [c, d] = input[1].split(' ').map(e => +e);

const num = a * d + b * c;
const denum = b * d;

// 최대공약수
const GCD = euclid(num, denum)[0];

console.log(num / GCD + ' ' + denum / GCD);