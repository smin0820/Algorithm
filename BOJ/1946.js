let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let T = Number(input[0]);
let line = 1;
for(let tc = 0; tc < T; tc++) {
    let N = Number(input[line]);
    let arr = [];
    for(let i = line + 1; i <= line + N; i++) {
        let data = input[i].split(' ').map(Number);
        arr.push(data);
    }
    arr.sort((a, b) => a[0] - b[0]);
    let count = 0;
    let minValue = 100001;
    for(let [x, y] of arr) {
        if(y < minValue) {
            minValue = y;
            count += 1;
        }
    }
    console.log(count);
    line += N + 1;
}