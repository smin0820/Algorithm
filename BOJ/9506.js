const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(Number);


for (i = 0; i < input.length; i++) {
    if (input[i] === -1) {
        break;
    } else {
        let sum = 0;
        let key = [];
        for (j = 1; j < input[i]; j++) {
            if (input[i] % j === 0) {
                key.push(j);
                sum += j;
            }
        }
        input[i] === sum ? console.log(input[i] + ' = ' + key.join(' + ')) : console.log(input[i] + ' is NOT perfect.');
    }
}
