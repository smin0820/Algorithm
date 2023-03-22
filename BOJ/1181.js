const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const n = input.shift();

// 중복 제거
newArr = [...new Set(input)];
// 길이 순서대로 정렬 
// 만약 길이가 같아서 a.length = b.length면
// localeCompare 메서드 a.localeCompare(b) 사용해서(알파벳 순서대로) 정렬함 
newArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(newArr.join('\n'));