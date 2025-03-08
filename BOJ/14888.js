const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input.shift());
const numbers = input.shift().split(' ').map(Number);
const operator = input.shift().split(' ').map(Number);

let minValue = Infinity;
let maxValue = -Infinity;

const calculator = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => parseInt(a / b),
  ];
  
  const dfs = (count, result) => {
    //연산자 갯수만큼 반복하다가 max, min 판정
    if (count === N - 1) {
        maxValue = Math.max(maxValue, result);
      minValue = Math.min(minValue, result);
    } else {
      for (let i = 0; i < operator.length; i++) {
        if (operator[i] === 0) {
          continue;
        }
        operator[i]--;
        dfs(count + 1, calculator[i](result, numbers[count + 1]));
        //배열 원상복구
        operator[i]++;
      }
    }
  };
  
  dfs(0, numbers[0]);
  
  console.log(maxValue ? maxValue : 0);
  console.log(minValue ? minValue : 0);