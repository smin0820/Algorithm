const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input.shift());
const numbers = input.shift().split(' ').map(Number);
const operators = input.shift().split(' ').map(Number); // [+,-,*,/]

let maxValue = -Infinity;
let minValue = Infinity;

function dfs(index, numList, opList) {
    if (index === N - 1) {
        const result = evaluate(numList, opList);
        maxValue = Math.max(maxValue, result);
        minValue = Math.min(minValue, result);
        return;
    }

    for (let i = 0; i < 4; i++) {
        if (operators[i] > 0) {
            operators[i]--;
            dfs(index + 1, [...numList, numbers[index + 1]], [...opList, i]);
            operators[i]++;
        }
    }
}

// **연산자 우선순위를 고려한 계산 함수**
function evaluate(numList, opList) {
    let newNums = [numList[0]];
    let newOps = [];

    // 1️⃣ 먼저 * / 연산을 처리한다.
    for (let i = 0; i < opList.length; i++) {
        if (opList[i] === 2) { // *
            newNums[newNums.length - 1] *= numList[i + 1];
        } else if (opList[i] === 3) { // /
            newNums[newNums.length - 1] =
                newNums[newNums.length - 1] < 0 ? Math.ceil(newNums[newNums.length - 1] / numList[i + 1]) : Math.floor(newNums[newNums.length - 1] / numList[i + 1]);
        } else {
            newNums.push(numList[i + 1]);
            newOps.push(opList[i]); // +, - 만 남김
        }
    }

    // 2️⃣ +, - 연산을 순차적으로 처리한다.
    let result = newNums[0];
    for (let i = 0; i < newOps.length; i++) {
        if (newOps[i] === 0) result += newNums[i + 1]; // +
        if (newOps[i] === 1) result -= newNums[i + 1]; // -
    }

    return result;
}

// DFS 시작
dfs(0, [numbers[0]], []);

// 결과 출력
console.log(maxValue);
console.log(minValue);