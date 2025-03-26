const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();

const str = input.split('');
let aCount = 0;

str.map(v => v === 'a' ? aCount++ : null);

let circular = str.concat(str);
let currentB = 0;
for(let i = 0; i < aCount; i++) {
    if(str[i] === 'b') currentB++;
}

let min = currentB;

for(let i = 1; i < str.length; i++) {
    if(circular[i - 1] === 'b') currentB--;
    if(circular[i +  aCount - 1] === 'b') currentB++;
    min = Math.min(min, currentB);
}

console.log(min);