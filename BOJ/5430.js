const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

let testCase = Number(input[0]);


let line = 1;

while(testCase) {
    let p = input[line].trim().split('');
    let n = Number(input[line + 1]);
    let arr = JSON.parse(input[line + 2]);
    
    let reverseFlag = false;
    let isValid = true;

    for(let i = 0; i < p.length; i++) {
        if(p[i] === 'R') {
            reverseFlag = !reverseFlag;
        } else if(p[i] === 'D') {
            if(arr.length === 0) {
                isValid = false;
                break;
            }

            if(reverseFlag) {
                arr.pop();
            } else {
                arr.shift();
            }
        }
    }
    
    if(reverseFlag) {
        arr.reverse();
    }

    if(isValid) {
        console.log('[' + arr + ']');
    } else {
        console.log('error');
        
    }

    line += 3;
    testCase--;
}