const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

let phone = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ"
};

let sum = 0;
for (i = 0; i < input.length; i++) {
    for (j = 2; j <= 9; j++) {
        if (phone[j].includes(input[i])) {
            sum += j + 1;
        }
    }
}

console.log(sum);