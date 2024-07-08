let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]);
let query = input[3].split(' ').map(Number);

arr.sort((a, b) => a - b);

let answer = '';
for(let i = 0; i < m; i++) {
    let count = countByRange(arr, query[i], query[i]);
    answer += count + ' ';
}

console.log(answer);

function lowerBound(arr, target, start, end) {
    while(start < end) {
        let mid = parseInt((start + end) / 2);
        if(arr[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

function upperBound(arr, target, start, end) {
    while(start < end) {
        let mid = parseInt((start + end) / 2);
        if(arr[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

function countByRange(arr, leftValue, rightValue) {
    let rightIndex = upperBound(arr, rightValue, 0, arr.length);
    let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
    return rightIndex - leftIndex;
}