const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0]);
let question = [];
let answer = 0;
for(let i = 1; i <= n; i++) {
    question.push(input[i].split(' ').map(Number));
}


for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 9; j++) {
        for(let k = 1; k <= 9; k++) {
            if(i === j || j === k || k === i) continue;
            let check = 0;

            for(let [number, s, b] of question) {
                const cur = String(i) + String(j) + String(k);
                const count = [0, 0];

                const str = String(number);
                for(let l = 0; l < str.length; l++) {
                    const index = cur.indexOf(str[l]);
                    
                    if(index === l) {
                        count[0] += 1;
                    } else if(index !== -1) {
                        count[1] += 1;
                    }
                }

                if(s === count[0] && b === count[1]) {
                    check += 1;
                }
            }

            if(check === n) answer += 1;
        }
    } 
}

console.log(answer);