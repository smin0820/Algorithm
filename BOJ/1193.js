const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split().map(Number);

let groupCount = 0;
let upOrder = [];
let downOrder = [];

while (input > 0) {
    groupCount++;
    input = input - groupCount;
}

for (i = 0; i < groupCount; i++) {
    upOrder.push(i + 1);
    downOrder.push(groupCount - i);
}

if (groupCount % 2 === 0) {
    console.log(`${upOrder[input + groupCount - 1]}` + '/' + `${downOrder[input + groupCount - 1]}`);
} else {
    console.log(`${downOrder[input + groupCount - 1]}` + '/' + `${upOrder[input + groupCount - 1]}`);
}