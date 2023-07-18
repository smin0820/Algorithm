function solution(absolutes, signs) {
    let answer = [];
    for(i = 0; i < signs.length; i++) {
       answer.push(signs[i] === true ? absolutes[i] : -absolutes[i]);
    }
    return answer.reduce((a, b) => a + b);
}

console.log(solution([4,7,12], [true,false,true]));
console.log(solution([1,2,3], [false,false,true]));


