const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');


const [N, d, k, c] = input.shift().split(' ').map(Number);
let check = new Array(d + 1).fill(0);
let sushi = input.map(Number);

let count = 0;
let answer = 0;

for(let i = 0; i < k; i++) {
    if(check[sushi[i]] === 0) count++;
    check[sushi[i]]++;
}

answer = count + (check[c] === 0 ? 1 : 0);

for(let i = 0; i < N; i++) {
    let end = (i + k) % N;
    
    check[sushi[i]]--;
    if(check[sushi[i]] === 0) count--;

    if (check[sushi[end]] === 0) count++;
    check[sushi[end]]++;

    answer = Math.max(answer, count + (check[c] === 0 ? 1 : 0));
}

console.log(answer);