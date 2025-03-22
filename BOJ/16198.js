const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
let weightArr = input[1].split(' ').map(Number);

let maxEnergy = 0;

function dfs(arr, energy) {
    if(arr.length === 2) {
        maxEnergy = Math.max(maxEnergy, energy);
        return;
    }

    for(let i = 1; i < arr.length - 1; i++) {
        let removed = arr[i];
        let energyPlus = arr[i - 1] * arr[i + 1];
        arr.splice(i, 1);
        dfs(arr, energy + energyPlus);
        arr.splice(i, 0, removed);
    }
} 

dfs(weightArr, 0)
console.log(maxEnergy);