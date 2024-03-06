function solution(s) {
    var answer = [];
    s = s.split(' ');
    for(i = 0; i < s.length; i++) {
        answer.push(s[i].charAt(0).toUpperCase() + s[i].slice(1).toLowerCase());
    }
    return answer.join(' ');
}