const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);


function getPermutation(arr) {
    const result = [];
    let visited = Array.from({ length: arr.length }, () => false);

    function permute(path) {
        if(path.length === arr.length) {
            result.push([...path]);
            return;
        }

        for(let i = 0; i < arr.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                path.push(arr[i]);
                permute(path);
                path.pop();
                visited[i] = false;
            }
        }
    }

    permute([]);
    return result;
}

function maxDifferenceSum(N, A) {
    const permutations = getPermutation(A);
    let maxSum = 0;

    for(const perm of permutations) {
        let sum = 0;
        for(let i = 0; i < N - 1; i++) {
            sum += Math.abs(perm[i] - perm[i + 1]);
        }
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}

console.log(maxDifferenceSum(N, A));