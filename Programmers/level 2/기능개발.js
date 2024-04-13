function solution(progresses, speeds) {
    let tempArr = [];
    
    for(let i = 0; i < progresses.length; i++) {
        let leftProgresses = 100 - progresses[i];
        tempArr.push(Math.ceil(leftProgresses / speeds[i]));
    }
    let compare = tempArr[0];
    let count = 0;
    var answer = [];
    
    for(let i = 0; i < tempArr.length; i++) {
        if(compare >= tempArr[i]) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            compare = tempArr[i];
        }
    }
    
    answer.push(count);
    
    return answer;
}