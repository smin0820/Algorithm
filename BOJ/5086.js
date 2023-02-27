const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
input.pop();

for (i = 0; i < input.length; i++) {
    const testCase = input[i].split(' ');
    if (testCase[1] % testCase[0] === 0) {
        console.log('factor');
    } else if (testCase[0] % testCase[1] === 0) {
        console.log('multiple');
    } else {
        console.log('neither');
    }
}