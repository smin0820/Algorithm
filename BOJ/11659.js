const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);

let sumValue = 0;
let prefixSum = [0];

for(let i of data) {
    sumValue += i;
    prefixSum.push(sumValue);
}

for(let i = 0; i < m; i++) {
    let [left, right] = input[i + 2].split(' ').map(Number);
    console.log(prefixSum[right] - prefixSum[left - 1]);   
}
