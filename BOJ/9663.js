let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let queens = [];

function possible(row, col) {
    for([x, y] of queens) {
        if(x === row || y === col) return false;
        if(Math.abs(x - row) === Math.abs(y - col)) return false;
    }
    return true;
}

let count = 0;
function dfs(row) {
    if(row === n) count += 1;
    for(let col = 0; col < n; col++) {
        if(!possible(row, col)) continue;
        queens.push([row, col]);
        dfs(row + 1);
        queens.pop();
    }
}

dfs(0);
console.log(count);
