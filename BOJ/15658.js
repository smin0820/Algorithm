const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input.shift());
const numbers = input.shift().split(' ').map(Number);
const operator = input.shift().split(' ').map(Number);

let maxVaule = -Infinity;
let minValue = Infinity;

const calc = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => parseInt(a / b)
]

function dfs(count, result) {
    if(count === N - 1) {
        maxVaule = Math.max(maxVaule, result);
        minValue = Math.min(minValue, result);
    } else {
        for(let i = 0; i < operator.length; i++) {
            if(operator[i] === 0) {
                continue;
            }

            operator[i]--;
            dfs(count + 1, calc[i](result, numbers[count + 1]));
            operator[i]++;
        }
    }
}

dfs(0, numbers[0]);

console.log(maxVaule ? maxVaule : 0);
console.log(minValue ? minValue : 0);