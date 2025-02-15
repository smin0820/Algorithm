function solution(priorities, location) {
    var answer = 0;
    let priArr = [];
    
    for(let i = 0; i < priorities.length; i++) {
        priArr.push({ index: i, priorities: priorities[i]}); 
    }
    
    let count = 0;
    while(priorities.length > 0) {
        let current = priArr.shift();
        if(priArr.some(doc => doc.priorities > current.priorities)) {
            priArr.push(current);
        } else {
            count++;
            if(current.index === location) {
                answer = count;
                break;
            }
        }
    }
    
    return answer;
}