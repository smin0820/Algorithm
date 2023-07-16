var n = 15;
let answer = [];

/*
for(i = 1; i <= n; i++) {
    if(i % 2 === 1) {
        answer.push(i);
    }
}
console.log(answer);
*/


for(i = 1; i <= n; i+=2) {
    answer.push(i);
}
console.log(answer);