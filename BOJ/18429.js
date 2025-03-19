const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
let kit = input.shift().split(' ').map(Number);
let threeWeight = 500;
let answer = 0;
function dfs(day, weight, used) {
    if(day === N) {
        answer++;
        return;
    }

    for(let i = 0; i < N; i++) {
        if(!used[i]) {
            const newWeight = weight - K + kit[i];

            if(newWeight >= 500) {
                used[i] = true;
                dfs(day + 1, newWeight, used);
                used[i] = false;
            }
        }
    }
}

dfs(0, 500, new Array(N).fill(false));
console.log(answer);