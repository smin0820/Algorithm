const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let dis = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);
let answer = 0;

let minCost = cost[0];

for(let i = 0; i < n; i++) {
    minCost = Math.min(minCost, cost[i]);
    cost[i] = minCost;
}

for(let j = 0; j < dis.length; j++) {
    answer += dis[j] * cost[j];
}

console.log(answer);