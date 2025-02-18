function solution(topping) {
    let answer = 0;
    let leftSet = new Set();
    let rightSet = new Set();
    let leftUniqueCount = [];
    let rightUniqueCount = [];
    console.log(topping.length)
    for(let i = 0; i < topping.length; i++) {
        leftSet.add(topping[i]);
        leftUniqueCount[i] = leftSet.size;
    }
    
    for(let i = topping.length - 1; i >= 0; i--) {
        rightSet.add(topping[i]);
        rightUniqueCount[i] = rightSet.size;
    }
    
    for(let i = 0; i < topping.length - 1; i++) {
        if(leftUniqueCount[i] === rightUniqueCount[i + 1]) {
            answer++;
        }
    }

    return answer;
}