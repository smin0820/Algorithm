function solution(s, n) {
    var answer = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';

    for(i = 0; i < s.length; i++) {
        var text = s[i];
        if(text == ' ') {
            answer += ' ';
            continue;
        }
        const textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text) + n;
        if(index >= textArr.length) {
            index -= textArr.length;
        }
        answer += textArr[index];
    }
    return answer;
}