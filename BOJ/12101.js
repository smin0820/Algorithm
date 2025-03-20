const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [n, k] = input[0].split(' ').map(Number);
let result = [];
let array = [];

function solution(total) {
    if(total > n) {
        return;
    }

    if(total === n) {
        result.push([...array]);
        return;
    }

    for(let i = 1; i < 4; i++) {
        array.push(i);
        solution(total + i);
        array.pop();
    }
}
 
solution(0);
console.log(result.length >= k ? result[k - 1].join('+') : -1);