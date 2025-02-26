function solution(s) {
    var answer = [];
    let sortStr = [];
    const arr = s.replace("{{", '').replace("}}", "").split('},{');
    for (let i = 0; i < arr.length; i++) {
    sortStr.push(arr[i].split(","));
    }
    sortStr.sort((a, b) => a.length - b.length);
 
    for(let tuple of sortStr) {
        for(let i = 0; i < tuple.length; i++) {
            if(!answer.includes(tuple[i])) {
                answer.push(tuple[i]);
            }
        }
    }
    return answer.map(Number);
}