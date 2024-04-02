function solution(s) {
    var answer = 0;
    let stack = [];
    let isCorrect = true;
    
    if(s.length % 2 === 1) {
        return 0;
    }
    
    for(let i = 0; i < s.length; i++) {
        let tempArr = s.slice(i) + s.slice(0, i);
        isCorrect = true;
        
        for(let n of tempArr) {
            if(n === "(" || n === "{" || n === "[") {
                stack.push(n);
            } else {
                let opening = stack.pop();
                if(opening === '(' &&  n === ')') continue;
                if(opening === '[' &&  n === ']') continue;
                if(opening === '{' &&  n === '}') continue;
                isCorrect = false;
                break;
            }
        }
        if (isCorrect) answer++;
    }

    return answer;
}