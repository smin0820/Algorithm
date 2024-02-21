function solution(k, score) {
    var answer = [];
    let tempArr = [];
    for(i = 0; i < score.length; i++) {
        tempArr.push(score[i]);
        tempArr.sort((a, b) => a - b);
        
        if(tempArr.length > k) {
            tempArr.shift();
        }
        answer.push(tempArr[0]);
    }
    
    return answer;
}