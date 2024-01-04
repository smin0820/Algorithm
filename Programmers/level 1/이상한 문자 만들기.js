function solution(s) {
    let words = s.toString().split(' ');
    let answer = "";
    for(i = 0; i < words.length; i++) {
        for(j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }
        if (i < words.length -1) {
            answer += ' ';
        }
    }
    return answer;
}


// 동일 하지만 조금 더 쉬운 방법
function solution(s) {
    return s.split(' ').map((i) => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()).join('')).join(' ');
}