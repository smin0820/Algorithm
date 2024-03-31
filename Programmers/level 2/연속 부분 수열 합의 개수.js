function solution(elements) {
    let set = new Set();
    var answer = 0;
    let tempArr = elements.concat(elements);
    for(let i = 0; i < elements.length; i++) {
        let sum = 0;
        for(let j = 0; j < elements.length; j++) {
            sum += tempArr[i + j];
            set.add(sum);
        }
    }
    
    return set.size;
}