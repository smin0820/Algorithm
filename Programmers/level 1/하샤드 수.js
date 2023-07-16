function solution(x) {
    var arr = x.toString().split('').map(Number);
    var add = arr.reduce((a, b) => a + b);
    return Number.isInteger(x / add) ? true : false;
}

console.log(solution(11));