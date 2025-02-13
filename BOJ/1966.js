const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

let testCase = Number(input[0]);
let line = 1;

while(testCase) {
    const [n, m] = input[line].split(' ').map(Number);
    let arr = input[line + 1].split(' ').map(Number);
    let queue = [];

    for(let i = 0; i < n; i++) {
        queue.push({ index: i, prioriy: arr[i] });
    }

    let count = 0;

    while(queue.length > 0) {
        let current = queue.shift();
        if(queue.some(doc => doc.prioriy > current.prioriy)) {
            queue.push(current);
        } else {
            count++;
            if(current.index === m) {
                console.log(count);
                break;
            }
        }
    }
   
    line += 2;
    testCase--;
}
