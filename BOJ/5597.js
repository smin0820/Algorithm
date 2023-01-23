const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);
let numArr = [];

for (i = 1; i <= 30; i++) {
    if (input.includes(i)) {        // 1부터 30까지 숫자있는지 확인 
        continue;                   // 있으면 continue
    }
    numArr.push(i);                 // 없으면 배열에 push
}

console.log(`${numArr[0]}\n${numArr[1]}`);