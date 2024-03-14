function solution(s) {
    var answer = [0, 0];
    let sLength = 0;
    while(s.length > 1) {
        sLength = s.length;
        s = s.split('0').join('');
        answer[0] += 1;
        answer[1] += (sLength - s.length);
        s = s.length.toString(2);
    }
    return answer;
}