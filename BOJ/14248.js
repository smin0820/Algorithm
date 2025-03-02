const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let startPoint = Number(input[2]) - 1;
let visited = Array.from({ length: n }, () => false);

let count = 0;

function dfs(currentIndex) {
    visited[currentIndex] = true;
    count++;

    let jumpDistance = arr[currentIndex];

    let leftIndex = currentIndex - jumpDistance;
    if(!visited[leftIndex] && leftIndex >= 0) {
        dfs(leftIndex);
    }

    let rightIndex = currentIndex + jumpDistance;
    if(!visited[rightIndex] && rightIndex < n) {
        dfs(rightIndex);
    }
}

dfs(startPoint);

console.log(count);