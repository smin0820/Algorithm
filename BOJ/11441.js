const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const data = input[1].split(' ').map(Number);

let sumValue = 0;
let prefixSum = [0];

for(let i of data) {
    sumValue += i;
    prefixSum.push(sumValue);
}

for(let i = 0; i < Number(input[2]); i++) {
    let [left, right] = input[i + 3].split(' ').map(Number);
    console.log(prefixSum[right] - prefixSum[left - 1]);
}



