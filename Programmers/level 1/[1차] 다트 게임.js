function solution(dartResult) {
    let score = 0;
    let countArr = [];
    for(let i = 0; i < dartResult.length; i++) {
        if(!isNaN(dartResult[i])) {
            score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
        } else if(dartResult[i] === 'S') {
            countArr.push(Math.pow(score, 1));
        } else if(dartResult[i] === 'D') {
            countArr.push(Math.pow(score, 2));
        } else if(dartResult[i] === 'T') {
            countArr.push(Math.pow(score, 3));
        } else if(dartResult[i] === '*') {
            countArr[countArr.length - 1] = countArr[countArr.length - 1] * 2;
            countArr[countArr.length - 2] = countArr[countArr.length - 2] * 2;
        } else if(dartResult[i] === '#') {
            countArr[countArr.length - 1] = -1 * countArr[countArr.length - 1];
        }
    }
    return countArr.reduce((a, b) => a + b);
}