var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString();

var answer = [];
var result = input;

for (var i = 2; i <= input; i++) {
    var num = i;
    while (result % num === 0) {
        answer.push(num);
        if (result / num === 1) break;
        result = result / num;
    }
}
console.log(answer.join('\n').trim());