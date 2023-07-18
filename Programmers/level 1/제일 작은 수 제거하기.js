function solution(arr) {
    var answer = Math.min(...arr);
    arr.splice(arr.indexOf(answer), 1);
    return arr.length === 0 ? [-1] : arr;
}

console.log(solution([4,3,2,1]));
console.log(solution([10]));