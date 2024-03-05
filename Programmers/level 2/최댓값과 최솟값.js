function solution(s) {
    var answer = '';
    s = s.split(' ');
    let min = Math.min(...s);
    let max = Math.max(...s);
    return `${min} ${max}`;
}